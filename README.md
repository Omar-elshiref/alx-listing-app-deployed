# Project Description
This project involves building a responsive property listing page using React, TypeScript, and Tailwind CSS. The application will display a collection of luxury properties with filtering capabilities, a hero section, and proper layout organization. The page will be fully responsive, adapting to different screen sizes while maintaining a clean, user-friendly interface.

# Learning Objectives
By completing this project, you will:

Implement responsive web design principles using Tailwind CSS
Create reusable React components for layout (Header, Footer, Layout)
Work with TypeScript interfaces for type safety
Structure a Next.js application with proper component organization
Render dynamic data from an array of objects
Implement filtering functionality for property listings
Practice best practices in component composition and styling
Learn to break down UI mockups into logical components

# Requirements
Technical Requirements
Use Next.js as the React framework
Implement TypeScript for type checking
Style components exclusively with Tailwind CSS
Create responsive layouts that work on mobile, tablet, and desktop
Structure components in a logical folder hierarchy
Use functional components with proper TypeScript typing
Functional Requirements
Layout Components

Header with navigation, logo, and search
Footer with relevant links and information
Layout wrapper for consistent page structure
Home Page

Hero section with background image and call-to-action text
Filter section with clickable filter pills
Property listing grid displaying all properties from the sample data
Responsive property cards showing key information
Data Management

Properly typed property data interface
Sample data array with complete property information
Best Practices
Component Organization

Follow a consistent folder structure
Separate layout components from page components
Keep components small and focused
Styling

Use Tailwind’s utility classes effectively
Implement responsive design with mobile-first approach
Maintain consistent spacing and typography
TypeScript

Define clear interfaces for all props
Type all components and functions properly
Use TypeScript to catch potential errors early
Performance

Optimize images for web
Implement proper loading states
Consider lazy loading for non-critical components
Accessibility

Use semantic HTML
Ensure proper contrast ratios
Include alt text for images
Make interactive elements keyboard-navigable
Expected Outcomes
A fully responsive property listing page
Clean, maintainable code with proper TypeScript typing
Reusable layout components
Properly structured property data
Functional filter components
Visually appealing UI with consistent styling

0. Develop Responsive Booking Detail Page with User Input and Payment Processing
Objective:

In this milestone, you will implement the Booking Detail Page based on the provided mockup. The page should allow users to enter their contact and payment details, review their booking information, and confirm the booking. This page will be responsive and styled using Tailwind CSS.

By the end of this milestone, you will have created a functional and responsive booking page where users can input details and proceed with the booking process.



ده كمبونبنت الاصلي 

import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => String(item.id) === String(id)
  );

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}

عايز اضيف مكتبه axois وخليه كده 

import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}