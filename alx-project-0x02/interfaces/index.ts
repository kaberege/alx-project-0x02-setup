export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onSubmit: (post: CardProps) => void;
    onClose: () => void;
}

export interface ButtonProps {
    size: "w-sm" | "w-md" | "w-lg";
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
    title: "Small" | "Medium" | "Large";
}