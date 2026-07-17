import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { SiteLayout } from "./components/layout/SiteLayout";

// Home stays eager — it's the most common landing point and should paint
// immediately. Everything else is route-split so a visitor only downloads
// the page they're actually viewing.
import { Home } from "./pages/Home";

const About = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.About })),
);
const ServicesOverview = lazy(() =>
  import("./pages/ServicesOverview").then((m) => ({
    default: m.ServicesOverview,
  })),
);
const ServiceDetail = lazy(() =>
  import("./pages/ServiceDetail").then((m) => ({ default: m.ServiceDetail })),
);
const Contact = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.Contact })),
);
const Careers = lazy(() =>
  import("./pages/Careers").then((m) => ({ default: m.Careers })),
);
const ResourcesOverview = lazy(() =>
  import("./pages/ResourcesOverview").then((m) => ({
    default: m.ResourcesOverview,
  })),
);
const Events = lazy(() =>
  import("./pages/Events").then((m) => ({ default: m.Events })),
);

const EventDetail = lazy(() =>
  import("./pages/EventDetail").then((m) => ({ default: m.EventDetail })),
);
const ArticleDetail = lazy(() =>
  import("./pages/ArticleDetail").then((m) => ({ default: m.ArticleDetail })),
);
const Industries = lazy(() =>
  import("./pages/Industries").then((m) => ({ default: m.Industries })),
);
const Solutions = lazy(() =>
  import("./pages/Solutions").then((m) => ({ default: m.Solutions })),
);
const FutureProductPage = lazy(() =>
  import("./pages/FutureProductPage").then((m) => ({
    default: m.FutureProductPage,
  })),
);
const ClientPortal = lazy(() =>
  import("./pages/ClientPortal").then((m) => ({ default: m.ClientPortal })),
);
const Privacy = lazy(() =>
  import("./pages/Privacy").then((m) => ({ default: m.Privacy })),
);
const Terms = lazy(() =>
  import("./pages/Terms").then((m) => ({ default: m.Terms })),
);
const ResponsibleDisclosure = lazy(() =>
  import("./pages/ResponsibleDisclosure").then((m) => ({
    default: m.ResponsibleDisclosure,
  })),
);
const ComingSoon = lazy(() =>
  import("./pages/ComingSoon").then((m) => ({ default: m.ComingSoon })),
);
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <SiteLayout>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<ResourcesOverview />} />
          <Route path="/resources/:slug" element={<ArticleDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/community" element={<FutureProductPage />} />
          <Route path="/academy" element={<FutureProductPage />} />
          <Route path="/ai" element={<FutureProductPage />} />
          <Route path="/portal" element={<ClientPortal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/security-disclosure"
            element={<ResponsibleDisclosure />}
          />
          <Route path="*" element={<ComingSoon section="Not Found" />} />
        </Routes>
      </Suspense>
    </SiteLayout>
  );
}

export default App;
