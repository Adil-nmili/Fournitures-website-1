import { Menu, Search, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <header className="bg-based-blue text-white relative">
            <header className="bg-secondary text-white py-3">
                <p className="container mx-auto px-4 text-center text-xs text-gray-200">
                    Free Shipping On Orders Over $299. Premium Comfort & Luxury Furniture
                </p>
            </header>

            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded"></div>
                        <span className="text-xl font-bold text-secondary">ABBANI</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to={'#'} className="hover:text-primary transition-colors font-medium text-sm text-secondary">HOME</Link>
                        <Link to={'#'} className="hover:text-primary transition-colors font-medium text-sm text-secondary">PAGES</Link>
                        <Link to={'#'} className="hover:text-primary transition-colors font-medium text-sm text-secondary">COLLECTIONS</Link>
                        <Link to={'#'} className="hover:text-primary transition-colors font-medium text-sm text-secondary">SHOP</Link>
                        <Link to={'#'} className="hover:text-primary transition-colors font-medium text-sm text-secondary">BLOG</Link>
                        <Link to={'#'} className="hover:text-primary transition-colors font-medium text-sm text-secondary">CONTACTS</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Search className="w-5 h-5 text-black cursor-pointer hover:text-primary transition-colors" />
                        <User className="w-5 h-5 text-black cursor-pointer hover:text-primary transition-colors" />
                        <ShoppingCart className="w-5 h-5 text-black cursor-pointer hover:text-primary transition-colors" />
                        <Menu className="w-5 h-5 md:hidden text-black cursor-pointer" />
                    </div>
                </div>
            </nav>

        </header>
    )
}