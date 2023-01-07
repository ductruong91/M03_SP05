import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";

import SupplierList from "./scenes/SupplierList";
import SupplierDetailInfo from "./scenes/SupplierDetailInfo";
import ImportProductsForm from "./scenes/form/ImportProductForm";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import CreatePriceQuotation from "./scenes/PriceQuotation/CreatePriceQuotationForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Topbar from "./scenes/global/Topbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PriceQuotationList from "./scenes/PriceQuotation/PriceQuotationList";
import ImportHistoryList from "./scenes/list/ImportHistoryList";
import NestedRouteModal from "./components/modal/NestedRouteModal";
import UpdatePriceQuotationForm from "./scenes/PriceQuotation/UpdatePriceQuotationForm";

import RequestImportList from "./scenes/RequestImportProduct/requestImportList";
import EditImportProductsForm from "./scenes/RequestImportProduct/editImportProductForm";
import CreateImportProduct from "./scenes/RequestImportProduct/createImportProduct";
import NotFound from "./scenes/NotFound";
import Setting from "./scenes/Setting";
import ConfirmImportPQ from "./scenes/PriceQuotation/ConfirmImportPQ";
import UpdateImportForm from "./scenes/form/UpdateImportForm";
import CreateSupplier from "./scenes/SupplierList/CreateSupplierForm";
import UpdateSupplier from "./scenes/SupplierList/UppdateSupplierForm";

// Create query client to use react query
const queryClient = new QueryClient();

function App() {
  const [theme, colorMode] = useMode();

  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider value={colorMode as any}>
        <ThemeProvider theme={theme as any}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/team" element={<Team />} /> */}
                {/* ======================================== Supplier ============================================== */}
                <Route path="/suppliers" element={<SupplierList />} />
                <Route path="/suppliers/create" element={<CreateSupplier />} />
                <Route path="/suppliers/:id" element={<SupplierDetailInfo />} />
                <Route
                  path="supplier/update/:id"
                  element={<UpdateSupplier />}
                />
                {/* <Route path="/BaoGia" element={<BaoGia />} /> */}
                {/* ======================================== Import ============================================== */}
                <Route
                  path="/imports/create"
                  element={<ImportProductsForm />}
                />

                <Route
                  path="/imports/edit/:id"
                  element={
                    <NestedRouteModal>
                      <EditImportProductsForm />
                    </NestedRouteModal>
                  }
                />
                <Route
                  path="/imports/history"
                  element={<ImportHistoryList />}
                />
                {/* ======================================== Price quotation ============================================== */}
                <Route path="/imports/request" element={<RequestImportList />}>
                  <Route
                    path="/imports/request/create_hieutt"
                    element={
                      <NestedRouteModal>
                        <CreateImportProduct />
                      </NestedRouteModal>
                    }
                  />
                </Route>
                <Route
                  path="/imports/update/:importId"
                  element={
                    <NestedRouteModal>
                      <UpdateImportForm />
                    </NestedRouteModal>
                  }
                />
                <Route
                  path="/imports/history"
                  element={<ImportHistoryList />}
                />
                {/* ======================================== Price quotation ============================================== */}
                <Route
                  path="/imports/request"
                  element={<RequestImportList />}
                />
                <Route
                  path="/price-quotations/create"
                  element={<CreatePriceQuotation />}
                />
                <Route
                  path="/imports/:importRequestId/price-quotation-list/"
                  element={<PriceQuotationList />}
                >
                  {/* Nested route */}
                  <Route
                    path="/imports/:importRequestId/price-quotation-list/create"
                    element={
                      <NestedRouteModal>
                        <CreatePriceQuotation />
                      </NestedRouteModal>
                    }
                  />
                  <Route
                    path="/imports/:importRequestId/price-quotation-list/update/:priceQuotationId"
                    element={
                      <NestedRouteModal>
                        <UpdatePriceQuotationForm />
                      </NestedRouteModal>
                    }
                  />
                  <Route
                    path="/imports/:importRequestId/price-quotation-list/confirm"
                    element={
                      <NestedRouteModal>
                        <ConfirmImportPQ />
                      </NestedRouteModal>
                    }
                  ></Route>
                  {/* Nested route */}
                </Route>
                <Route path="/setting" element={<Setting />} />
                {/* ========================================  ============================================== */}
                {/* ... */}
                {/* ======================================== END ============================================== */}
                <Route path="*" element={<NotFound />} />
                {/* ======================================== END ============================================== */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      {/* development */}
      <ReactQueryDevtools />
      {/* development */}
    </QueryClientProvider>
  );
}

export default App;
