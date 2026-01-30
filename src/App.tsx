import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ConfigurationPage } from "@/pages/ConfigurationPage";

// Test page
function TestPage() {
  const sendCompletionSignal = async () => {
    try {
      const response = await fetch("http://localhost:8765/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "completed" }),
      });

      if (response.ok) {
        console.log("✅ Completion signal sent successfully");
      } else {
        console.error("❌ Failed to send completion signal");
      }
    } catch (error) {
      console.error("❌ Error sending completion signal:", error);
    }
  };

  const handleClick = async (idx: number) => {
    console.log(`Button ${idx} clicked`);

    if (idx === 5) {
      alert(`Selesai ${idx} - Mengirim signal ke kiosk...`);
      await sendCompletionSignal();
    } else {
      alert(`Selesai ${idx}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Test Buttons
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Klik "Selesai 5" untuk kembali ke idle
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => handleClick(1)}
            className="w-full py-4 rounded-xl font-medium shadow-sm bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Selesai 1
          </button>

          <button
            onClick={() => handleClick(2)}
            className="w-full py-4 rounded-xl font-medium shadow-sm bg-blue-500 text-white hover:bg-green-600 hover:shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
          >
            Selesai 2
          </button>

          <button
            onClick={() => handleClick(3)}
            className="w-full py-4 rounded-xl font-medium shadow-sm bg-blue-500 text-white hover:bg-yellow-600 hover:shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          >
            Selesai 3
          </button>

          <button
            onClick={() => handleClick(4)}
            className="w-full py-4 rounded-xl font-medium shadow-sm bg-blue-500 text-white hover:bg-pink-600 hover:shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
          >
            Selesai 4
          </button>

          {/* FIXED: Button 5 sends completion signal */}
          <button
            onClick={() => handleClick(5)}
            className="w-full col-span-full py-5 rounded-2xl font-bold shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 text-lg"
          >
            🎉 Selesai 5 (Complete)
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category/:roomSize" element={<ConfigurationPage />} />
        <Route
          path="/:category/:roomSize/:step"
          element={<ConfigurationPage />}
        />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
