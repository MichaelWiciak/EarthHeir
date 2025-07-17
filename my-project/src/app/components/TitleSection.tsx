import React from "react";

interface Creator {
  name: string;
  url?: string;
}

interface TitleSectionProps {
  title: string;
  creators: Creator[];
  motto: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  creators,
  motto,
}) => {
  return (
    <div className="text-center md:text-left pt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

      <p className="text-lg mb-2">
        By{" "}
        {creators.map((creator, index) => (
          <span key={index}>
            {creator.url ? (
              <a
                href={creator.url}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {creator.name}
              </a>
            ) : (
              creator.name
            )}
            {index < creators.length - 1 && ", "}
          </span>
        ))}
      </p>

      <p className="text-md italic text-gray-600">{motto}</p>
    </div>
  );
};

export default TitleSection;
