import { Menu, Search, ShoppingCart, User } from 'lucide-react'

export default function Navigation() {
    return (
        <header className="bg-based-blue text-white">
            <header className="bg-secondary text-white py-3">
                <div className="container mx-auto px-4 text-center text-sm">
                    Free Shipping On Orders Over $299. Premium Comfort & Luxury Furniture
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded"></div>
                        <span className="text-xl font-bold text-secondary">ABBANI</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="hover:text-primary transition-colors font-medium text-secondary">HOME</a>
                        <a href="#" className="hover:text-primary transition-colors font-medium text-secondary">PAGES</a>
                        <a href="#" className="hover:text-primary transition-colors font-medium text-secondary">COLLECTIONS</a>
                        <a href="#" className="hover:text-primary transition-colors font-medium text-secondary">SHOP</a>
                        <a href="#" className="hover:text-primary transition-colors font-medium text-secondary">BLOG</a>
                        <a href="#" className="hover:text-primary transition-colors font-medium text-secondary">CONTACTS</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Search className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <User className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <Menu className="w-5 h-5 md:hidden cursor-pointer" />
                    </div>
                </div>
            </nav>

        </header>
    )
}