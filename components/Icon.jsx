export default function Icon({ name = "arrow", size = 20, className = "" }) {
  const paths = {
    plus: <path d="M5 12h14M12 5v14" />,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    diagonal: <><path d="M6 18 18 6M6 6h12v12" /></>,
    phone: <path d="m8 3 3 5-3 3c1.5 2.5 2.5 3.5 5 5l3-3 5 3c0 3-2 5-5 5C9 20 4 15 3 8c0-3 2-5 5-5Z" />,
    pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M18 13a5 5 0 0 1 3 5v3" /></>,
    recycle: <><path d="m8 5 2-3a2 2 0 0 1 3.5 0L17 8M13 7l4 1 1-4M19 12l2 4a2 2 0 0 1-2 3h-7M15 16l-3 3 3 3M8 19H4a2 2 0 0 1-2-3l4-7M2 10l4-1 1 4" /></>,
    leaf: <><path d="M20 3S7 1 4 9s4 14 10 8 6-14 6-14ZM3 22 15 9" /></>
  };
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>;
}
