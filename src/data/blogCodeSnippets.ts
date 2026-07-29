/**
 * Extraits de code pour les fonds d'articles de blog
 */

export const codeSnippets: Record<string, string> = {
  "react-hooks-2026": `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(value.length > 0);
  }, [value]);

  return { value, setValue, isValid };
}`,

  "typescript-tips": `// Utility Types en TypeScript
type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
};

// Partial - Tous les champs optionnels
type PartialUser = Partial<User>;

// Pick - Sélectionner des champs
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit - Exclure des champs
type UserWithoutEmail = Omit<User, 'email'>;

// Generics avancés
function filterArray<T>(
  array: T[],
  predicate: (item: T) => boolean
): T[] {
  return array.filter(predicate);
}

// Types conditionnels
type IsString<T> = T extends string ? true : false;`,

  "tailwind-dark-mode": `// Configuration du Dark Mode
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Classes Tailwind avec dark:
<div className="bg-white dark:bg-black">
  <h1 className="text-black dark:text-white">
    Hello World
  </h1>
</div>`,
};
