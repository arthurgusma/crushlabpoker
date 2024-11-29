interface ButtonProps {
    children: React.ReactNode;
    width?: string;
}

export function ButtonSubmit({ children, width }: ButtonProps) {
    return (
        <button type="submit" style={{ width: `${width}px`}} className="text-main-light-green p-2 rounded-lg cursor-pointer bg-main-gold opacity-75 hover:opacity-100">
            {children}
        </button>
    );
}