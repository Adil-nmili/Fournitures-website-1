import { Outdent } from "lucide-react";
import Navigation from "../components/partials/Navigation";

export default function ClientLayout() {
    return (
        <div className="min-h-screen bg-based-light">
            <Navigation />
            <main className="container mx-auto py-8">
                <Outdent />
            </main>
            <footer className="bg-based-blue text-white py-6">
                {/* Footer content */}
            </footer>
        </div>
    )
}