import React from 'react';
import { FaUtensils, FaClock, FaUserCheck, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const Services = () => {
  return (
    <div className="container mx-auto px-5 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Service 1: Menu Management */}
        <motion.div
          className="bg-white py-6 px-8 rounded-lg text-gray-800 flex gap-4 flex-col items-center text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          whileHover="hover"
          variants={hoverVariants}
        >
          <FaUtensils size={40} className="text-blue-500" />
          <h3 className="font-bold text-xl">Menu Management</h3>
          <p className="text-sm text-gray-600">Easily update and manage your restaurant's menu.</p>
        </motion.div>

        {/* Service 2: Table Reservations */}
        <motion.div
          className="bg-white py-6 px-8 rounded-lg text-gray-800 flex gap-4 flex-col items-center text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          whileHover="hover"
          variants={hoverVariants}
        >
          <FaClock size={40} className="text-blue-500" />
          <h3 className="font-bold text-xl">Table Reservations</h3>
          <p className="text-sm text-gray-600">Efficiently manage table bookings and reservations.</p>
        </motion.div>

        {/* Service 3: Staff Management */}
        <motion.div
          className="bg-white py-6 px-8 rounded-lg text-gray-800 flex gap-4 flex-col items-center text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          whileHover="hover"
          variants={hoverVariants}
        >
          <FaUserCheck size={40} className="text-blue-500" />
          <h3 className="font-bold text-xl">Staff Management</h3>
          <p className="text-sm text-gray-600">Organize and manage your staff schedules and roles.</p>
        </motion.div>

        {/* Service 4: Secure Payments */}
        <motion.div
          className="bg-white py-6 px-8 rounded-lg text-gray-800 flex gap-4 flex-col items-center text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          whileHover="hover"
          variants={hoverVariants}
        >
          <FaShieldAlt size={40} className="text-blue-500" />
          <h3 className="font-bold text-xl">Secure Payments</h3>
          <p className="text-sm text-gray-600">Ensure safe and reliable payment processing.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;