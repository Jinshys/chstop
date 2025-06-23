import React, { useState } from 'react';
import { ArrowRight, Filter, ChevronDown, ChevronRight, Download } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['filament']);

  const productCategories = [
    {
      id: 'all',
      name: 'All Products',
      description: 'Complete range of aramid fiber materials and components',
      subcategories: []
    },
    {
      id: 'filament',
      name: 'Aramid Filament',
      description: 'High-performance continuous fibers for demanding applications',
      subcategories: [
        { id: 'high-strength', name: 'High-Strength Type' },
        { id: 'high-modulus', name: 'High-Modulus Type' },
        { id: 'regular', name: 'Regular Type' }
      ]
    },
    {
      id: 'paper',
      name: 'Aramid Paper',
      description: 'Specialized papers for electrical and structural applications',
      subcategories: [
        { id: 'electrical', name: 'Electrical Insulation Paper' },
        { id: 'honeycomb', name: 'Honeycomb Core Paper' },
        { id: 'composite', name: 'Composite Grade Paper' }
      ]
    },
    {
      id: 'fabric',
      name: 'Aramid Fabric',
      description: 'Woven and non-woven textiles for protection and reinforcement',
      subcategories: [
        { id: 'ballistic', name: 'Ballistic Fabric' },
        { id: 'ud-fabric', name: 'UD Fabric' },
        { id: 'woven', name: 'Woven Fabric' },
        { id: 'knitted', name: 'Knitted Fabric' }
      ]
    },
    {
      id: 'rope',
      name: 'Ropes & Cables',
      description: 'High-strength ropes and cable reinforcement materials',
      subcategories: [
        { id: 'rope', name: 'Aramid Ropes' },
        { id: 'cable-reinforcement', name: 'Cable Reinforcement' },
        { id: 'webbing', name: 'Aramid Webbing' }
      ]
    },
    {
      id: 'composite',
      name: 'Composite Parts',
      description: 'Custom-engineered components and finished products',
      subcategories: [
        { id: 'aerospace', name: 'Aerospace Components' },
        { id: 'automotive', name: 'Automotive Parts' },
        { id: 'industrial', name: 'Industrial Components' }
      ]
    },
    {
      id: 'raw-materials',
      name: 'Raw Materials',
      description: 'Basic aramid materials for further processing',
      subcategories: [
        { id: 'staple-fiber', name: 'Staple Fiber' },
        { id: 'pulp', name: 'Aramid Pulp' },
        { id: 'chopped-fiber', name: 'Chopped Fiber' }
      ]
    }
  ];

  const products = [
    // Aramid Filament - High-Strength Type
    {
      id: 1,
      category: 'filament',
      subcategory: 'high-strength',
      title: 'High-Strength Aramid Filament 1000D',
      description: 'Premium continuous filament yarn with exceptional tensile strength for critical applications.',
      specifications: ['Tensile Strength: 3.6 GPa', 'Modulus: 130 GPa', 'Density: 1.44 g/cm³', 'Elongation: 3.5%'],
      applications: ['Tire reinforcement', 'Optical cable reinforcement', 'Ballistic protection', 'High-performance ropes'],
      image: 'https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['ISO 9001', 'OEKO-TEX'],
      datasheet: 'aramid-filament-1000d-datasheet.pdf'
    },
    {
      id: 2,
      category: 'filament',
      subcategory: 'high-strength',
      title: 'High-Strength Aramid Filament 1500D',
      description: 'Heavy-duty filament for extreme load applications requiring maximum strength.',
      specifications: ['Tensile Strength: 3.8 GPa', 'Modulus: 135 GPa', 'Density: 1.44 g/cm³', 'UV Resistant'],
      applications: ['Marine ropes', 'Industrial lifting', 'Composite reinforcement', 'Safety equipment'],
      image: 'https://images.pexels.com/photos/3846134/pexels-photo-3846134.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['ISO 9001', 'CE'],
      datasheet: 'aramid-filament-1500d-datasheet.pdf'
    },
    // Aramid Filament - High-Modulus Type
    {
      id: 3,
      category: 'filament',
      subcategory: 'high-modulus',
      title: 'High-Modulus Aramid Filament HM',
      description: 'Ultra-high modulus filament designed for applications requiring maximum stiffness.',
      specifications: ['Tensile Strength: 2.8 GPa', 'Modulus: 180 GPa', 'Low elongation: 1.5%', 'Thermal stability: 400°C'],
      applications: ['Aerospace composites', 'Precision instruments', 'Satellite structures', 'Racing components'],
      image: 'https://images.pexels.com/photos/6069096/pexels-photo-6069096.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['AS9100', 'ISO 9001'],
      datasheet: 'aramid-filament-hm-datasheet.pdf'
    },
    // Aramid Paper - Electrical Insulation
    {
      id: 4,
      category: 'paper',
      subcategory: 'electrical',
      title: 'Electrical Insulation Aramid Paper 0.2mm',
      description: 'High-quality insulation paper with excellent dielectric properties and thermal stability.',
      specifications: ['Thickness: 0.2mm', 'Dielectric strength: >20kV/mm', 'Temperature: 220°C', 'Density: 0.8 g/cm³'],
      applications: ['Transformer insulation', 'Motor windings', 'Electrical equipment', 'Power distribution'],
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['IEC 60641', 'UL'],
      datasheet: 'aramid-paper-electrical-datasheet.pdf'
    },
    {
      id: 5,
      category: 'paper',
      subcategory: 'honeycomb',
      title: 'Honeycomb Core Aramid Paper',
      description: 'Specialized paper for manufacturing lightweight honeycomb core structures.',
      specifications: ['Weight: 120 g/m²', 'High compression strength', 'Fire resistant: UL94 V-0', 'Moisture resistant'],
      applications: ['Aerospace panels', 'Marine structures', 'Transportation', 'Architectural panels'],
      image: 'https://images.pexels.com/photos/4993739/pexels-photo-4993739.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['FAA', 'EASA'],
      datasheet: 'aramid-paper-honeycomb-datasheet.pdf'
    },
    // Aramid Fabric - Ballistic
    {
      id: 6,
      category: 'fabric',
      subcategory: 'ballistic',
      title: 'Ballistic Aramid Fabric 400gsm',
      description: 'High-performance woven fabric for personal protection and armor applications.',
      specifications: ['Weight: 400 g/m²', 'Plain weave', 'V50 >450 m/s', 'Areal density: 0.4 kg/m²'],
      applications: ['Body armor', 'Ballistic helmets', 'Vehicle protection', 'Blast mitigation'],
      image: 'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['NIJ 0101.06', 'STANAG'],
      datasheet: 'aramid-fabric-ballistic-datasheet.pdf'
    },
    {
      id: 7,
      category: 'fabric',
      subcategory: 'ud-fabric',
      title: 'UD Aramid Fabric 200gsm',
      description: 'Unidirectional fabric for maximum strength in specific directions.',
      specifications: ['Weight: 200 g/m²', '0°/90° configuration', 'High fiber volume: 65%', 'Resin compatible'],
      applications: ['Composite reinforcement', 'Sports equipment', 'Industrial components', 'Structural parts'],
      image: 'https://images.pexels.com/photos/3846134/pexels-photo-3846134.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['ISO 9001', 'IATF 16949'],
      datasheet: 'aramid-fabric-ud-datasheet.pdf'
    },
    // Ropes & Cables
    {
      id: 8,
      category: 'rope',
      subcategory: 'rope',
      title: 'High-Strength Aramid Rope 12mm',
      description: 'Braided rope with exceptional strength-to-weight ratio and chemical resistance.',
      specifications: ['Diameter: 12mm', 'Breaking load: 50kN', 'Low stretch: <3%', 'UV resistant coating'],
      applications: ['Marine mooring', 'Industrial lifting', 'Safety lines', 'Climbing equipment'],
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['CE', 'UIAA'],
      datasheet: 'aramid-rope-12mm-datasheet.pdf'
    },
    {
      id: 9,
      category: 'rope',
      subcategory: 'cable-reinforcement',
      title: 'Aramid Cable Reinforcement Yarn',
      description: 'Specialized aramid fibers for strengthening optical and electrical cables.',
      specifications: ['High tensile strength: 3.2 GPa', 'Low thermal expansion', 'Non-conductive', 'Water resistant'],
      applications: ['Fiber optic cables', 'Power cables', 'Underwater cables', 'Aerospace wiring'],
      image: 'https://images.pexels.com/photos/6069096/pexels-photo-6069096.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['ITU-T', 'IEC'],
      datasheet: 'aramid-cable-reinforcement-datasheet.pdf'
    },
    // Composite Parts
    {
      id: 10,
      category: 'composite',
      subcategory: 'aerospace',
      title: 'Aerospace Composite Panels',
      description: 'Custom-manufactured composite panels for aerospace applications.',
      specifications: ['Autoclave cured', 'NDT tested', 'Thickness: 2-20mm', 'Fire resistant: FAR 25.853'],
      applications: ['Aircraft interiors', 'Satellite components', 'UAV structures', 'Helicopter parts'],
      image: 'https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['AS9100', 'NADCAP'],
      datasheet: 'aerospace-composite-panels-datasheet.pdf'
    },
    // Raw Materials
    {
      id: 11,
      category: 'raw-materials',
      subcategory: 'staple-fiber',
      title: 'Aramid Staple Fiber 38mm',
      description: 'Short cut fibers for spinning, non-woven applications and reinforcement.',
      specifications: ['Length: 38mm', 'Fineness: 1.7 dtex', 'Tensile strength: 2.8 GPa', 'Crimped structure'],
      applications: ['Protective gloves', 'Filter media', 'Friction materials', 'Reinforced plastics'],
      image: 'https://images.pexels.com/photos/4993739/pexels-photo-4993739.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['ISO 9001', 'REACH'],
      datasheet: 'aramid-staple-fiber-datasheet.pdf'
    },
    {
      id: 12,
      category: 'raw-materials',
      subcategory: 'pulp',
      title: 'Aramid Pulp Grade A',
      description: 'High-quality aramid pulp for paper making and friction applications.',
      specifications: ['Fiber length: 0.5-2mm', 'High surface area', 'Excellent dispersion', 'Moisture: <8%'],
      applications: ['Aramid paper production', 'Brake pads', 'Gaskets', 'Sealing materials'],
      image: 'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=600',
      certifications: ['ISO 9001', 'IATF 16949'],
      datasheet: 'aramid-pulp-grade-a-datasheet.pdf'
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const getActiveCategory = () => {
    return productCategories.find(cat => cat.id === activeCategory);
  };

  const handleDownload = (datasheet: string, productTitle: string) => {
    // In a real application, this would trigger an actual file download
    // For now, we'll show an alert
    alert(`Downloading ${productTitle} technical datasheet: ${datasheet}\n\nIn a production environment, this would download the actual PDF file.`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive range of aramid fiber materials and components for various industrial applications
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Category Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Product Categories</h3>
              </div>
              
              <nav className="space-y-2">
                {productCategories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => {
                        setActiveCategory(category.id);
                        if (category.subcategories.length > 0) {
                          toggleCategory(category.id);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-md transition-colors duration-200 ${
                        activeCategory === category.id
                          ? 'bg-blue-100 text-blue-800 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      {category.subcategories.length > 0 && (
                        <span className="ml-2">
                          {expandedCategories.includes(category.id) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </span>
                      )}
                    </button>
                    
                    {/* Subcategories */}
                    {category.subcategories.length > 0 && expandedCategories.includes(category.id) && (
                      <div className="ml-4 mt-2 space-y-1">
                        {category.subcategories.map((subcategory) => (
                          <a
                            key={subcategory.id}
                            href={`#${subcategory.id}`}
                            className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
                          >
                            {subcategory.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            {activeCategory !== 'all' && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {getActiveCategory()?.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {getActiveCategory()?.description}
                </p>
                {getActiveCategory()?.subcategories && getActiveCategory()?.subcategories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {getActiveCategory()?.subcategories.map((subcategory) => (
                      <a
                        key={subcategory.id}
                        href={`#${subcategory.id}`}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors duration-200"
                      >
                        {subcategory.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Products Grid */}
            <div className="space-y-12">
              {activeCategory === 'all' ? (
                // Show all categories with their products
                productCategories.filter(cat => cat.id !== 'all').map((category) => {
                  const categoryProducts = products.filter(product => product.category === category.id);
                  if (categoryProducts.length === 0) return null;
                  
                  return (
                    <div key={category.id} className="space-y-6">
                      <div className="border-b border-gray-200 pb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categoryProducts.slice(0, 4).map((product) => (
                          <ProductCard key={product.id} product={product} onDownload={handleDownload} />
                        ))}
                      </div>
                      {categoryProducts.length > 4 && (
                        <div className="text-center">
                          <button
                            onClick={() => setActiveCategory(category.id)}
                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                          >
                            View All {category.name} Products →
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                // Show products by subcategory
                getActiveCategory()?.subcategories && getActiveCategory()?.subcategories.length > 0 ? (
                  getActiveCategory()?.subcategories.map((subcategory) => {
                    const subcategoryProducts = filteredProducts.filter(product => product.subcategory === subcategory.id);
                    if (subcategoryProducts.length === 0) return null;
                    
                    return (
                      <div key={subcategory.id} id={subcategory.id} className="space-y-6">
                        <div className="border-b border-gray-200 pb-4">
                          <h3 className="text-xl font-bold text-gray-900">{subcategory.name}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {subcategoryProducts.map((product) => (
                            <ProductCard key={product.id} product={product} onDownload={handleDownload} />
                          ))}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // Show all products in category without subcategories
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} onDownload={handleDownload} />
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our engineering team can develop custom aramid fiber solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Contact Our Engineers
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Download Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, onDownload }: { product: any; onDownload: (datasheet: string, productTitle: string) => void }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h4>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        
        <div className="mb-4">
          <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Specifications:</h5>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.specifications.slice(0, 3).map((spec: string, index: number) => (
              <li key={index}>• {spec}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="text-sm font-semibold text-gray-900 mb-2">Applications:</h5>
          <div className="flex flex-wrap gap-1">
            {product.applications.slice(0, 3).map((app: string, index: number) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {app}
              </span>
            ))}
          </div>
        </div>

        {product.certifications && (
          <div className="mb-6">
            <h5 className="text-sm font-semibold text-gray-900 mb-2">Certifications:</h5>
            <div className="flex flex-wrap gap-1">
              {product.certifications.map((cert: string, index: number) => (
                <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center">
            Request Quote
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button
            onClick={() => onDownload(product.datasheet, product.title)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
            title="Download Technical Datasheet"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;