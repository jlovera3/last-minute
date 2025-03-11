import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

/**
 * Generic Card Component for displaying information.
 * @param {string} title - Title of the card (e.g., hotel name)
 * @param {string} image - URL of the main image
 * @param {string} location - Location description
 * @param {number} stars - Star rating
 * @param {number} rating - User rating
 * @param {string} price - Price with currency
 */
interface CardComponentProps {
  title: string;
  image: string;
  location: string;
  stars: number;
  rating: number;
  price: string;
}

export default function CardComponent({ title, image, location, stars, rating, price }: CardComponentProps) {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Card.Cover source={{ uri: image }} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{location}</Paragraph>
        <Paragraph>{stars} ⭐ - {rating}/10</Paragraph>
        <Paragraph style={{ fontWeight: "bold", color: "green" }}>{price}</Paragraph>
      </Card.Content>
    </Card>
  );
}
