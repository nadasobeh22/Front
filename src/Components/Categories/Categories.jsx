import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../Layout/Layout';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryImages = {
    1: [ // الفطور
      'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    ],
    2: [ // المشروبات
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    ],
    3: [ // الغداء
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    ],
    4: [ // العشاء
      'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    ],
    5: [ // المقبلات
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    ],
    6: [ // الحلو
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
      'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    ]
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.data && Array.isArray(data.data)) {
          setCategories(data.data);
        } else {
          throw new Error('Expected an array in the "data" field but got: ' + JSON.stringify(data));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (categoryId) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-600">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-red-500">Error: {error}</h2>
      </div>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Categories
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {categories.map(category => (
            <motion.div
              key={category.category_id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category.category_id)}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-br from-blue-50 to-purple-50"
            >
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
              </div>
            </motion.div>
          ))}
        </div>
       
        <div className="mt-12 space-y-12">
          {categories.map(category => (
            <div
              key={category.category_id}
              id={`category-${category.category_id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
                    <div className="p-8">
                    <h2 className="text-5xl text-center font-bold mb-6 text-blue-500 hover:text-blue-300 transition-all duration-500">
  {category.name}
</h2>
                      <p className="text-gray-700 text-lg leading-8 max-w-2xl hover:text-gray-800 transition-all duration-300">
                      This is a detailed description of the {category.name} category. Explore our delicious offerings and find your favorite dishes!
                      </p>
                  </div>
              {categoryImages[category.category_id] ? (
                <div className="px-8 pb-8">
                  <div className="space-y-6">
                    {chunkArray(categoryImages[category.category_id], 3).map((imageGroup, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                      >
                        {imageGroup.map((image, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-50 rounded-lg p-4 transition-all duration-300"
                          >
                            <img
                              src={image}
                              alt={`${category.name} ${imgIndex + 1}`}
                              className="w-full h-48 object-cover rounded-lg shadow-sm"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 p-8 text-center">No images available for this category.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;