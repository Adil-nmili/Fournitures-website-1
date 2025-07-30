import Navigation from "../components/partials/Navigation";
import { Outlet} from 'react-router-dom'

export default function ClientLayout() {
    return (
        <div className="min-h-screen bg-based-light relative">
            <Navigation />
            <main className="">
                <Outlet />
            </main>
            <footer className="bg-based-blue text-white py-6">
                {/* Footer content */}
            </footer>
        </div>
    )
}