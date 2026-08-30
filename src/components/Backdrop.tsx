import "./Backdrop.css";

/**
 * Layered atmosphere: aurora bloom, drifting orbs, film grain and vignette.
 * Purely decorative — kept out of the accessibility tree.
 */
export function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__base" />
      <div className="backdrop__aurora backdrop__aurora--left" />
      <div className="backdrop__aurora backdrop__aurora--right" />
      <div className="backdrop__aurora backdrop__aurora--top" />
      <div className="backdrop__grain" />
      <div className="backdrop__vignette" />
    </div>
  );
}
