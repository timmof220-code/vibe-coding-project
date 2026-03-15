import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

vi.mock("framer-motion", () => ({
  motion: {
    button: ({ children, className, onClick, whileHover, whileTap, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
      <button className={className} onClick={onClick} {...rest}>
        {children}
      </button>
    ),
    div: ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("Navbar", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="about"></div>
      <div id="services-directions"></div>
      <div id="services"></div>
      <div id="methods"></div>
      <div id="faq"></div>
      <div id="contacts"></div>
      <div id="cta"></div>
    `;
  });

  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Анна Тим")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Обо мне").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Направления").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Услуги").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Методы").length).toBeGreaterThan(0);
    expect(screen.getAllByText("FAQ").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Контакты").length).toBeGreaterThan(0);
  });

  it("renders the booking button", () => {
    render(<Navbar />);
    const buttons = screen.getAllByRole("button", { name: /записаться/i });
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("toggles mobile menu open and closed", () => {
    render(<Navbar />);
    // Mobile menu items are rendered via AnimatePresence; initially closed
    const toggleButton = screen.getByRole("button", { name: "" });
    // Menu opens on first click
    fireEvent.click(toggleButton);
    // All nav link buttons should now be visible (desktop + mobile)
    expect(screen.getAllByText("Обо мне").length).toBeGreaterThanOrEqual(2);
    // Menu closes on second click
    fireEvent.click(toggleButton);
    expect(screen.getAllByText("Обо мне").length).toBe(1);
  });

  it("scrolls to section when nav link is clicked", () => {
    const scrollIntoViewMock = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;

    render(<Navbar />);
    const aboutButtons = screen.getAllByText("Обо мне");
    fireEvent.click(aboutButtons[0]);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
