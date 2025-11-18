import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("left", "routes/left.tsx"), route("right", "routes/right.tsx")] satisfies RouteConfig;
