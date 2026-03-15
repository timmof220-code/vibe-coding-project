import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactsSection from "@/components/ContactsSection";

vi.mock("framer-motion", () => ({
  motion: {
    section: ({ children, className, id }: React.HTMLAttributes<HTMLElement>) => (
      <section className={className} id={id}>
        {children}
      </section>
    ),
    button: ({ children, className, onClick, type }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
      <button className={className} onClick={onClick} type={type}>
        {children}
      </button>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("ContactsSection", () => {
  it("renders the contact form", () => {
    render(<ContactsSection />);
    expect(screen.getByText("Свяжитесь со мной")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ваше имя")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Telegram или телефон")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Кратко опишите ваш запрос")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /отправить/i })).toBeInTheDocument();
  });

  it("shows Telegram and phone contact links", () => {
    render(<ContactsSection />);
    const telegramLink = screen.getByRole("link", { name: /telegram/i });
    expect(telegramLink).toHaveAttribute("href", "https://t.me/AnnaTim");
    const phoneLink = screen.getByRole("link", { name: /телефон/i });
    expect(phoneLink).toHaveAttribute("href", "tel:+79221335008");
  });

  it("allows filling in form fields", () => {
    render(<ContactsSection />);
    const nameInput = screen.getByPlaceholderText("Ваше имя") as HTMLInputElement;
    const contactInput = screen.getByPlaceholderText("Telegram или телефон") as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText("Кратко опишите ваш запрос") as HTMLTextAreaElement;

    fireEvent.change(nameInput, { target: { value: "Иван Иванов" } });
    fireEvent.change(contactInput, { target: { value: "@ivan" } });
    fireEvent.change(messageInput, { target: { value: "Хочу записаться на консультацию" } });

    expect(nameInput.value).toBe("Иван Иванов");
    expect(contactInput.value).toBe("@ivan");
    expect(messageInput.value).toBe("Хочу записаться на консультацию");
  });

  it("shows success message after form submission", () => {
    render(<ContactsSection />);
    const nameInput = screen.getByPlaceholderText("Ваше имя");
    const contactInput = screen.getByPlaceholderText("Telegram или телефон");
    const form = nameInput.closest("form")!;

    fireEvent.change(nameInput, { target: { value: "Мария" } });
    fireEvent.change(contactInput, { target: { value: "+79001234567" } });
    fireEvent.submit(form);

    expect(screen.getByText("Спасибо!")).toBeInTheDocument();
    expect(screen.getByText(/свяжусь с вами/i)).toBeInTheDocument();
  });

  it("hides the form after successful submission", () => {
    render(<ContactsSection />);
    const nameInput = screen.getByPlaceholderText("Ваше имя");
    const form = nameInput.closest("form")!;

    fireEvent.change(nameInput, { target: { value: "Тест" } });
    fireEvent.submit(form);

    expect(screen.queryByPlaceholderText("Ваше имя")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /отправить/i })).not.toBeInTheDocument();
  });
});
