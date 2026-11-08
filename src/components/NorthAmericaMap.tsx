import { geoConicEqualArea } from "d3-geo";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
// North America subset of world-atlas countries-50m, bundled with the site (no runtime fetch)
import world from "@/data/north-america-50m.json";

const W = 800;
const H = 620;
const FOCUS = new Set(["124", "840"]); // ISO 3166 numeric: Canada, United States

const topo = world as unknown as Topology<{ countries: GeometryCollection }>;
const countries = feature(topo, topo.objects.countries) as FeatureCollection<Geometry>;
const northAmerica = countries.features.filter((f) => ["124", "840", "484", "304"].includes(String(f.id)));
const focus: FeatureCollection = {
  type: "FeatureCollection",
  features: countries.features.filter((f) => FOCUS.has(String(f.id))) as Feature[],
};

// Albers-style conic projection fitted to Canada + USA (incl. Alaska)
const projection = geoConicEqualArea()
  .parallels([42, 68])
  .rotate([102, 0])
  .fitExtent(
    [
      [24, 24],
      [W - 24, H - 24],
    ],
    focus,
  );

const labels = [
  { name: "Canada", coordinates: [-106, 58] as [number, number] },
  { name: "United States", coordinates: [-99, 38.5] as [number, number] },
];

export function NorthAmericaMap({ label }: { label: string }) {
  return (
    <ComposableMap
      width={W}
      height={H}
      // react-simple-maps accepts a d3 projection instance
      projection={projection as unknown as string}
      role="img"
      aria-label={label}
      className="h-auto w-full"
    >
      <Geographies geography={{ type: "FeatureCollection", features: northAmerica }}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const on = FOCUS.has(String(geo.id));
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                tabIndex={-1}
                fill={on ? "#F2EDE4" : "transparent"}
                stroke={on ? "#B8975A" : "#E6DFD3"}
                strokeWidth={on ? 0.6 : 0.5}
                strokeLinejoin="round"
                style={{ default: { outline: "none" }, hover: { outline: "none" }, pressed: { outline: "none" } }}
              />
            );
          })
        }
      </Geographies>
      {labels.map((l) => (
        <Marker key={l.name} coordinates={l.coordinates}>
          <text
            textAnchor="middle"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 26, fontStyle: "italic", fill: "#5E5A55", letterSpacing: "0.04em" }}
          >
            {l.name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}
