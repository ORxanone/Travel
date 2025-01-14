export const navMenu = [
  {
    label: "Home",
    href: "/",
    sebMenus: [],
  },
  {
    label: "About Us",
    href: "/about",
    children: [],
  },
  {
    label: "Tour",
    href: "/tours",
    children: [
      {
        label: "Econom Tour",
        href: "/",
      },
      {
        label: "Medium Tour",
        href: "/",
      },
      {
        label: "Premium Tour",
        href: "/",
      },
    ],
  },
  //   {
  //     label: "Resources",
  //     href: "#",
  //     children: [
  //       {
  //         label: "Blog",
  //         href: "/blogs",
  //       },
  //       {
  //         label: "Engineering",
  //         href: "/engineering",
  //       },
  //       {
  //         label: "Manufacturing",
  //         href: "/manufacturing",
  //       },
  //     ],
  //   },
  {
    label: "Contact Us",
    href: "/contact",
    children: [],
  },
];
