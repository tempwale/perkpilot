import React, { useState, useMemo, useEffect } from "react";

type ModuleItem = {
  id: string;
  label: string;
  benefits?: string[];
  checked?: boolean;
};

interface BlogModulesProps {
  title?: string;
  modules?: ModuleItem[];
  onChange?: (modules: ModuleItem[]) => void;
  className?: string;
}

const DEFAULT_MODULES: ModuleItem[] = [
  { id: "introduction", label: "Introduction", checked: false },
  { id: "mentioned-tools", label: "Mentioned Tools", checked: true },
  { id: "tools-brief", label: "Tools Brief", checked: false },
  { id: "features-comparisons", label: "Features Comparisons", checked: false },
  { id: "pros-cons", label: "Pros & Cons", checked: false },
  { id: "conclusion", label: "Conclusion", checked: false },
];

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const BlogModules: React.FC<BlogModulesProps> = ({
  title = "Blog Modules",
  modules = DEFAULT_MODULES,
  onChange,
  className = "",
}) => {
  const normalizedModules = useMemo<ModuleItem[]>(() => {
    if (!modules || modules.length === 0) {
      return DEFAULT_MODULES;
    }

    const singleWithBenefits =
      modules.length === 1 && (modules[0]?.benefits?.length ?? 0) > 0;

    if (singleWithBenefits) {
      const benefits = modules[0]?.benefits ?? [];
      return benefits
        .filter((benefit): benefit is string => Boolean(benefit?.trim()))
        .map((benefit, idx) => ({
          id: slugify(benefit) || `module-${idx}`,
          label: benefit.trim(),
          checked: idx === 0,
        }));
    }

    return modules.map((m, idx) => ({
      id: m.id || `module-${idx}`,
      label: m.label || `Module ${idx + 1}`,
      checked: m.checked ?? idx === 0,
    }));
  }, [modules]);

  const [items, setItems] = useState<ModuleItem[]>(normalizedModules);

  useEffect(() => {
    setItems(normalizedModules);
  }, [normalizedModules]);

  const select = (id: string) => {
    const updated = items.map((it) => ({ ...it, checked: it.id === id }));
    setItems(updated);
    onChange?.(updated);

    // Scroll smoothly to that section
    try {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch {
      // Ignore SSR errors
    }
  };

  return (
    <div className={className}>
      <div className="w-[397px] p-6 bg-white/10 rounded-3xl outline-1 -outline-offset-[-1px] outline-[#ebeef4]/10 flex flex-col gap-6 overflow-y-auto max-h-[500px]">
        <div className="text-neutral-50 text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-loose">
          {modules[0]?.label || title}
        </div>

        <div className="flex flex-col gap-4">
          {items.map((mod) => {
            const strokeId = `paint0_${mod.id}`;
            const fillId = `paint1_${mod.id}`;
            return (
              <label
                key={mod.id}
                className="flex items-center gap-3 cursor-pointer text-neutral-50 font-['Poppins']"
              >
                <input
                  type="radio"
                  name="blog-module"
                  checked={!!mod.checked}
                  onChange={() => select(mod.id)}
                  className="sr-only"
                  aria-label={mod.label}
                />

                {/* Visual SVG for unchecked / checked states */}
                {!mod.checked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0"
                    onClick={() => select(mod.id)}
                  >
                    <circle cx="10" cy="10" r="9.5" stroke="#FAFAFA" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0"
                    onClick={() => select(mod.id)}
                  >
                    <defs>
                      <linearGradient
                        id={strokeId}
                        x1="10"
                        y1="0"
                        x2="10"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#501BD6" />
                        <stop offset="1" stopColor="#7F57E2" />
                      </linearGradient>
                      <linearGradient
                        id={fillId}
                        x1="10"
                        y1="5"
                        x2="10"
                        y2="15"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#501BD6" />
                        <stop offset="1" stopColor="#7F57E2" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="10"
                      cy="10"
                      r="9.5"
                      stroke={`url(#${strokeId})`}
                    />
                    <circle cx="10" cy="10" r="5" fill={`url(#${fillId})`} />
                  </svg>
                )}

                <span onClick={() => select(mod.id)}>{mod.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogModules;
