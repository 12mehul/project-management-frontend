import React from "react";
import Link from "next/link";

const BreadcrumbItems = ({ breadcrumbs = [] }) => {
  const dashboardBreadcrumb = {
    href: "/admin",
    label: "Dashboard",
    icon: {
      viewBox: "0 0 20 20",
      path: "m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z",
    },
  };

  const allBreadcrumbs = [dashboardBreadcrumb, ...breadcrumbs];

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {allBreadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="inline-flex items-center">
            {breadcrumb.href ? (
              <Link
                href={breadcrumb.href}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-purple-600"
              >
                {breadcrumb.icon && (
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox={breadcrumb.icon.viewBox}
                  >
                    <path d={breadcrumb.icon.path} />
                  </svg>
                )}
                {breadcrumb.label}
              </Link>
            ) : (
              <span className="text-sm font-medium text-gray-500">
                {breadcrumb.label}
              </span>
            )}
            {index < allBreadcrumbs.length - 1 && (
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbItems;
