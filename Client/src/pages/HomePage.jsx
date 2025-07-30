import { useEffect, useRef } from 'react';
import { ShoppingCart, User, Search, Menu, Star, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CountUp from 'react-countup';
import Countdown from 'react-countdown';

const HomePage = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const categoriesRef = useRef(null);
  const modernSectionRef = useRef(null);
  const dealsRef = useRef(null);
  const premiumRef = useRef(null);
   const targetDate = Date.now() + (3 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    // Animation on scroll functionality
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('animate-in');
        }
      });
    };

    // Initial hero animations
    setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('animate-in');
      }
    }, 300);

    setTimeout(() => {
      if (statsRef.current) {
        statsRef.current.classList.add('animate-in');
      }
    }, 600);

    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);


  return (
    <div className="min-h-screen bg-white overflow-x-hidden ">
      <section className="relative hero-gradient min-h-screen flex items-start">
        <div 
          ref={heroRef}
          className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
              <Badge variant="outline" className="border-secondary text-secondary font-medium">
                PREMIUM FURNITURE
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-secondary leading-tight">
              We Take <span className="text-primary">Furniture</span><br />
              Making Seriously
            </h1>
            
            <p className="text-secondary/80 text-sm max-w-lg">
              We believe in the power of good furniture to change the way we live and feel. 
              It's more than wood and metal, it's an integral part of home.
            </p>
            
            <Button 
              size="lg" 
              className="bg-warm2 hover:bg-warm3 text-white px-6 py-3  font-medium transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Our Collection
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop" 
                alt="Luxury Chair" 
                className="w-[450px] max-w-lg mx-auto rounded-xl shadow-xl"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-full z-20 p-4 shadow-lg animate-bounce">
              <div className="text-center">
                <Star className="w-6 h-6 text-primary mx-auto fill-current" />
                <div className="text-xs text-secondary mt-1">Premium</div>
              </div>
            </div>
          </div>
        </div>

       
      </section>

      <section className='py-24  bg-[url(/lamps.jpg)] bg-center bg-cover bg-fixed'>
      <div className="flex items-center container mx-auto px-4">
 {/* Floating Chair Feature */}
        <Card className=" max-w-lg transform hover:scale-105 transition-transform duration-300 bg-secondary/90 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=80&h=80&fit=crop" 
                alt="Tokyo Long Sleeve" 
                className="w-32 h-24 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg text-white">Tokyo Long Sleeve</h3>
                <div className="text-primary flex mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white mt-2">
                  Shop Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Stats */}
            <div 
              ref={statsRef}
              className="flex space-x-12 flex-1 justify-center  pt-8 opacity-0 transform translate-x-8 transition-all duration-1000 ease-out delay-300"
            >
              <div>
                <div className="text-3xl font-bold text-gray-300"><CountUp end={100} duration={5} />K+</div>
                <div className="text-sm text-gray-300/70">Furniture And<br />Decor Product</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-300"><CountUp end={15} duration={5} />K</div>
                <div className="text-sm text-gray-300/70">Happy Customer<br />Design Solution</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-300"><CountUp end={50} duration={5} />K+</div>
                <div className="text-sm text-gray-300/70">Awards Of International<br />Design Excellence</div>
              </div>
            </div>
            </div>
      </section>

      {/* Shop By Category */}
      <section className="py-10 bg-white flex items-center">
        <div className="container mx-auto px-4">
          <div 
            ref={categoriesRef}
            className="animate-on-scroll opacity-0 transform  transition-all duration-1000"
          >
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold text-secondary mb-1">Shop By Category</h2>
                <p className="text-secondary/70">Transform your space with our collection of premium, quality furniture.</p>
              </div>
              <div className="flex space-x-2">
                <Button size="icon" className="bg-warm2 hover:bg-warm3 text-white rounded-full">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button size="icon" className="bg-warm2 hover:bg-warm3 text-white rounded-full">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: "Wood Table", image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=200&h=200&fit=crop" },
                { name: "Round Stool", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&h=200&fit=crop" },
                { name: "Wooden Chair", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop" },
                { name: "Lounge Bench", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop" },
                { name: "Wooden Lamp", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
                { name: "Wicker Hanging Chair", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop" }
              ].map((category, index) => (
                <div 
                  key={category.name}
                  className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow border-2 border-transparent group-hover:border-warm1">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-secondary group-hover:text-primary transition-colors">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Wood Furniture */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div 
            ref={modernSectionRef}
            className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll opacity-0 transform translate-x-8 transition-all duration-1000"
          >
            <div>
              <h2 className="text-5xl font-bold text-secondary mb-6">
                Modern<br />
                <span className="text-primary">Wood Furniture</span><br />
                Collections
              </h2>
              <p className="text-secondary/80 mb-8 text-lg">
                With a unique style all its own, the Tokyo Long Sleeve brings
                balance, harmony, and craft into your home. Discover your favorite new Living spaces.
              </p>
              <Button 
                size="lg" 
                className="bg-warm2 hover:bg-warm3 text-white px-8 py-4 font-medium transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore More
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop" 
                alt="Modern Kitchen" 
                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-20 bg-[url(/bed-1.jpg)] bg-norepeat bg-cover bg-center bg-fixed">
        <div className="container mx-auto px-4">
          <div 
            ref={dealsRef}
            className="text-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            <h2 className="text-4xl font-bold text-black underline mb-8">DEALS EXPIRE SOON!</h2>
            <div className="flex justify-center space-x-8 text-center">
              {/* {[
                { value: "02", label: "Days" },
                { value: "05", label: "Hours" },
                { value: "33", label: "Mins" },
                { value: "45", label: "Secs" }
              ].map((time, index) => (
                <Card key={time.label} className="bg-secondary text-white border-0 min-w-24">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold">{time.value}</div>
                    <div className="text-sm text-gray-300">{time.label}</div>
                  </CardContent>
                </Card>
              ))} */}
               <Countdown  date={targetDate} renderer={renderer}/>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Collections */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div 
            ref={premiumRef}
            className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold text-secondary">Shop Premium Collections</h2>
              <div className="flex space-x-4">
                <Button variant="ghost" className="text-primary font-medium hover:text-primary/80">
                  All Furniture
                </Button>
                <Button variant="ghost" className="text-secondary/70 hover:text-primary">
                  Best Sellers
                </Button>
                <Button variant="ghost" className="text-secondary/70 hover:text-primary">
                  New Arrivals
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  name: "Modern Bar Stool", 
                  price: "$299", 
                  image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop",
                  badge: "SALE",
                  badgeColor: "bg-primary"
                },
                { 
                  name: "Designer Table Lamp", 
                  price: "$189", 
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
                  badge: "NEW",
                  badgeColor: "bg-green-500"
                },
                { 
                  name: "Leather Accent Chair", 
                  price: "$799", 
                  image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
                  badge: "BEST SELLER",
                  badgeColor: "bg-warm2"
                },
                { 
                  name: "Upholstered Dining Chair", 
                  price: "$449", 
                  image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop",
                  badge: "NEW",
                  badgeColor: "bg-green-500"
                }
              ].map((product, index) => (
                <Card 
                  key={product.name}
                  className="group bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 border-0 shadow-lg"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white hover:${product.badgeColor}`}>
                      {product.badge}
                    </Badge>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="text-2xl font-bold text-warm2 mb-4">{product.price}</div>
                    <Button className="w-full bg-secondary hover:bg-primary text-white transition-colors duration-300">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;



// Custom renderer for countdown
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <Card className="bg-based-red text-white border-0 min-w-16">
        <CardContent className="">
          <div className="text-xl font-bold">00</div>
          <div className="text-sm text-white/80">Sale Ended</div>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <div className="flex justify-center space-x-8 text-center">
        {[
          { value: days, label: "Days" },
          { value: hours, label: "Hours" },
          { value: minutes, label: "Mins" },
          { value: seconds, label: "Secs" }
        ].map((time) => (
          <Card key={time.label} className="bg-secondary text-white border-0 min-w-16 py-2">
            <CardContent className="">
              <div className="text-2xl font-bold">
                {String(time.value).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-300">{time.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
};
