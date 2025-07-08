import React, { useState } from "react";
import { ShoppingCart, User, Menu, X, Search, ChevronDown, Star } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("shop");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(3);

  const categories = [
    { id: "shop", name: "All Categories" },
    { id: "bundle", name: "Bundle deals", highlight: true },
    { id: "weekly", name: "Weekly deals" },
    { id: "brands", name: "Top Brands" },
    { id: "choice", name: "Choice" },
    { id: "home", name: "Home & Garden" },
    { id: "hair", name: "Hair Extensions & Wigs" },
    { id: "more", name: "More", hasDropdown: true },
  ];

  const handleAuthClick = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
      setUser(null);
    } else {
      console.log("Show login modal");
    }
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleCartClick = () => {
    console.log("Show cart modal");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Navigation */}
      <div className="border-b border-gray-200">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Optimized for better balance */}
            <div className="flex items-center flex-shrink-0 w-48">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="flex items-center justify-center w-8 h-8 transform rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-red-600 -rotate-12">
                    <span className="text-sm font-bold text-white transform rotate-12">A</span>
                  </div>
                  <div className="absolute flex items-center justify-center w-3 h-3 bg-yellow-400 rounded-full -top-1 -right-1">
                    <Star size={8} className="text-yellow-600 fill-current" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight">
                    <span className="text-orange-500">Auri</span>
                    <span className="text-red-500">Cart</span>
                  </h1>
                  <div className="-mt-1 text-xs text-gray-500">Global Shopping Festival</div>
                </div>
              </div>
            </div>

            {/* Search Bar - Better responsive handling */}
            <div className="flex-1 max-w-2xl min-w-0 mx-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="free gifts for new users"
                  className="w-full py-2.5 pl-4 pr-12 text-sm border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50 focus:bg-white transition-colors"
                />
                <button
                  onClick={handleSearch}
                  className="absolute p-2 text-white transition-colors -translate-y-1/2 bg-orange-500 rounded-full right-1 top-1/2 hover:bg-orange-600"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Right Side - Better balanced spacing */}
            <div className="flex items-center justify-end space-x-6 w-80">
              {/* Language */}
              <div className="items-center hidden space-x-1 text-sm lg:flex">
                <div className="flex items-center justify-center w-5 h-4 text-xs font-bold text-white bg-orange-500 rounded-sm">
                  EN
                </div>
                <span className="text-gray-700">/ USD</span>
                <ChevronDown size={14} className="text-gray-500" />
              </div>

              {/* User */}
              <div className="flex items-center space-x-2">
                <User size={20} className="text-gray-600" />
                <div className="hidden text-sm md:block">
                  {isAuthenticated && user ? (
                    <>
                      <div className="text-xs text-gray-500">Welcome</div>
                      <button onClick={handleAuthClick} className="font-medium text-gray-700 transition-colors hover:text-orange-500">
                        {user.name}
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="text-xs text-gray-500">Welcome</div>
                      <button onClick={handleAuthClick} className="font-medium text-gray-700 transition-colors hover:text-orange-500">
                        Sign in / Register
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Cart */}
              <button onClick={handleCartClick} className="relative flex items-center space-x-2 text-gray-700 transition-colors hover:text-orange-500">
                <ShoppingCart size={20} />
                <span className="hidden text-sm font-medium sm:inline">Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-orange-500 rounded-full -top-2 -right-2">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 transition-colors lg:hidden hover:text-gray-900"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 lg:hidden">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="free gifts for new users"
            className="w-full py-2.5 pl-4 pr-12 text-sm border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
          />
          <button
            onClick={handleSearch}
            className="absolute p-2 text-white transition-colors -translate-y-1/2 bg-orange-500 rounded-full right-1 top-1/2 hover:bg-orange-600"
          >
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="bg-white border-b border-gray-100">
        <div className="px-4 mx-auto max-w-7xl">
          <nav className="flex items-center h-12 space-x-8 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-1 text-sm font-medium whitespace-nowrap transition-colors hover:text-orange-500 ${
                  category.highlight
                    ? "text-red-500 hover:text-red-600"
                    : activeCategory === category.id
                    ? "text-orange-500"
                    : "text-gray-700"
                }`}
              >
                {category.id === "shop" && <Menu size={16} />}
                <span>{category.name}</span>
                {category.hasDropdown && <ChevronDown size={14} />}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="bg-white border-t lg:hidden">
          <nav className="px-4 pt-2 pb-3 space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50 rounded-lg ${
                  category.highlight
                    ? "text-red-500"
                    : activeCategory === category.id
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;