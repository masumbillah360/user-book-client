import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
