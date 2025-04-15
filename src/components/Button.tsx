import { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

// Определяем типы для пропсов кнопки
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // То, что будет внутри кнопки (текст или иконка)
  className?: string; // Дополнительные классы для стилизации
}

// Простой компонент кнопки
export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
}
