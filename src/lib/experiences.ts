// Experience config for interactive 3D case studies (Brief 1).
//
// Each flagship case study gets an "experience" definition: the live launch
// link, the poster/render used while the 3D scene streams in (and on low-power
// or mobile devices where 3D isn't performant), and the hotspots a visitor can
// click to learn what each element does and the tech behind it.
//
// 3D UPGRADE PATH (when Blender assets arrive from miracle.otugo@gmail.com):
//   1. Export each booth from Blender as glTF/GLB (draco-compressed, < 5 MB).
//   2. Drop the file in /public/models/<id>.glb.
//   3. Set `glbSrc: "/models/<id>.glb"` below and add a `position` + `normal`
//      (model-viewer data-position / data-normal) to each hotspot.
//   4. `npm i @google/model-viewer` and enable the <model-viewer> branch in
//      ExperienceViewer.tsx. The poster below stays as the loading fallback.

export interface ExperienceHotspot {
  id: string;
  title: string;       // the element (screen, kiosk, wall, station)
  description: string; // what it does
  tech: string;        // the tech behind it
  x: number;           // overlay position, % (0–100) — poster/render mode
  y: number;           // overlay position, % (0–100)
  position?: string;   // model-viewer data-position, e.g. "1 0.5 0.5 m"
  normal?: string;     // model-viewer data-normal, e.g. "0 0 1"
}

export interface CaseStudyExperience {
  id: string;
  launchLabel: string;
  launchUrl: string | null; // null hides the launch CTA until a URL is supplied
  poster: string;           // rendered still / fallback image
  glbSrc: string | null;    // set when the GLB asset is available
  cameraOrbit?: string;     // signature angle, e.g. "35deg 70deg 110%"
  hotspots: ExperienceHotspot[];
}

// NOTE: hotspot x/y are approximate poster positions and are placeholders until
// the real renders / 3D scenes replace the current AI placeholder hero images.
export const experiences: Record<string, CaseStudyExperience> = {
  "age-2026": {
    id: "age-2026",
    launchLabel: "Launch the interactive map",
    launchUrl: "https://agemap-55cef.web.app",
    poster: "/images/age-2026-3.png",
    glbSrc: null,
    cameraOrbit: "35deg 70deg 110%",
    hotspots: [
      {
        id: "map",
        title: "Interactive Map",
        description:
          "The centrepiece: a live, real-time map of the gaming and gambling ecosystem across the continent — studios, publishers, investment activity and emerging markets.",
        tech: "Real-time web map with live data feeds, rendered to a large-format display.",
        x: 38,
        y: 48,
      },
      {
        id: "prediction",
        title: "Prediction Station",
        description:
          "Attendees place live predictions on gaming-industry outcomes — fastest-growing market, next breakout genre, most likely IPO.",
        tech: "Touch kiosk feeding a live result wall; predictions update in real time.",
        x: 10,
        y: 78,
      },
      {
        id: "projection",
        title: "Projection Wall",
        description:
          "An ambient, animated gaming visual that draws people off the aisle and anchors the floor as a destination.",
        tech: "Projection / LED wall running a real-time graphics loop.",
        x: 82,
        y: 45,
      },
      {
        id: "intelligence",
        title: "RealmSpace Intelligence",
        description:
          "Underneath it all, RealmSpace captures zone dwell time, interaction depth, footfall and engagement sequences.",
        tech: "Computer-vision footfall tracking feeding an append-only event bus, delivered as a post-event insight report.",
        x: 60,
        y: 22,
      },
    ],
  },
  prestmit: {
    id: "prestmit",
    launchLabel: "Play the Prestmit Runner",
    launchUrl: "https://prestmitrunner.web.app", // inferred from Firebase project "prestmitrunner" — verify
    poster: "/images/Realistic_photograph_of_a_bright_orange_and_white_-1782596045852.png",
    glbSrc: null,
    cameraOrbit: "20deg 75deg 100%",
    hotspots: [
      {
        id: "game",
        title: "The Trust Machine",
        description:
          "A gamified experience that walks players through the core Prestmit journey — convert, trust, transact — as play rather than a product demo.",
        tech: "Real-time 3D game engine with integrated product-education flow.",
        x: 52,
        y: 45,
      },
      {
        id: "leaderboard",
        title: "Leaderboard",
        description:
          "Leaderboard mechanics drive repeat visits and create natural conversation starters between attendees and the Prestmit team.",
        tech: "Real-time score sync with on-device leaderboard rendering.",
        x: 52,
        y: 27,
      },
      {
        id: "lead-capture",
        title: "Lead Capture",
        description:
          "Participation surfaces contact information and product interest without feeling like a form.",
        tech: "Lead capture embedded directly in the game flow.",
        x: 64,
        y: 60,
      },
      {
        id: "intelligence",
        title: "RealmSpace Intelligence",
        description:
          "Captures engagement depth, session duration, interaction sequences and lead-conversion data across the activation.",
        tech: "Append-only event bus + vision tracking, turned into a structured follow-up report.",
        x: 30,
        y: 18,
      },
    ],
  },
  kuda: {
    id: "kuda",
    launchLabel: "Launch the Kuda activation",
    launchUrl: null, // TODO: confirm the Kuda branded activation URL
    poster: "/images/kuda-2025.png",
    glbSrc: null,
    cameraOrbit: "25deg 70deg 105%",
    hotspots: [
      {
        id: "kiosk",
        title: "The Kuda Kiosk",
        description:
          "A self-guided interactive walkthrough of Kuda's core features — account opening, fee-free banking, savings and transfers.",
        tech: "Purpose-built interactive interface running the full product-education flow.",
        x: 15,
        y: 55,
      },
      {
        id: "demo",
        title: "Live Demo",
        description:
          "Visitors experience the product flow directly on the kiosk, driving sign-ups and downloads on the floor in real time.",
        tech: "Live product demo with on-device sign-up hand-off.",
        x: 88,
        y: 55,
      },
      {
        id: "signup",
        title: "Sign-up Capture",
        description:
          "Sign-up capture integrated into the kiosk flow, converting product curiosity into qualified leads without a sales conversation.",
        tech: "Embedded capture with conversion attribution back to the kiosk.",
        x: 40,
        y: 52,
      },
      {
        id: "intelligence",
        title: "RealmSpace Intelligence",
        description:
          "Captures which features attract the most interest, average time per feature, and kiosk-to-sign-up conversion.",
        tech: "Feature-level engagement tracking over the RealmSpace event bus.",
        x: 50,
        y: 20,
      },
    ],
  },
};

export function getExperience(id: string): CaseStudyExperience | undefined {
  return experiences[id];
}
