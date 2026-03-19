import { useState } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  size?: number;
}

const Rating = ({
  max = 5,
  value = 0,
  onChange,
  size = 24,
}: RatingProps) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: max }).map((_, index) => {
        const ratingValue = index + 1;
        const filled = hover ? ratingValue <= hover : ratingValue <= value;

        return (
          <Star
            key={index}
            size={size}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onChange?.(ratingValue)}
            style={{
              cursor: "pointer",
              fill: filled ? "#facc15" : "none",
              stroke: "#facc15",
            }}
          />
        );
      })}
    </div>
  );
};

export default Rating;