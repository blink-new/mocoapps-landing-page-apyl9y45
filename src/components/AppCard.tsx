import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export interface AppCardProps {
  title: string;
  description: string;
  tag: string;
  link: string;
  image?: string;
}

const AppCard = ({ title, description, tag, link, image }: AppCardProps) => {
  const isComingSoon = tag.toLowerCase() === "coming soon";
  
  const getTagColor = (tag: string) => {
    const tagMap: Record<string, string> = {
      "ai": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
      "prototype": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
      "local": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
      "live": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
      "coming soon": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    };
    
    // Default to gray if the tag is not found
    return tagMap[tag.toLowerCase()] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      {image && (
        <div className="w-full h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}>
            {tag}
          </span>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm mt-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button 
          disabled={isComingSoon} 
          className="w-full" 
          variant={isComingSoon ? "secondary" : "default"}
          asChild={!isComingSoon}
        >
          {isComingSoon ? (
            <>Coming Soon</>
          ) : (
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              Launch App <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AppCard;