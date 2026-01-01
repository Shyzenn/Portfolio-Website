import Link from "next/link";

const LinkButton = ({
  icon,
  label,
  classname,
  iconClassName,
  href,
  newTab,
}: {
  icon: React.ReactNode;
  label: string;
  classname: string;
  iconClassName?: string;
  href: string;
  newTab?: boolean;
}) => {
  return (
    <Link
      href={href}
      target={`${newTab ? "_blank" : ""}`}
      className={`flex items-center gap-2 border dark:border-white rounded-sm ${classname} cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 `}
    >
      <span className={`${iconClassName}`}>{icon}</span>
      {label}
    </Link>
  );
};

export default LinkButton;
