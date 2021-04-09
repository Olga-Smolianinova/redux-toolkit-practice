// импортируем lazy
import { lazy } from "react";

import { v4 as uuid } from "uuid";

// импортируем компоненты страниц
// создаем массив роутов

// экспортируем массив роутов

const routes = [
  {
    key: uuid(),
    exact: true,
    path: "/",
    component: lazy(() => import("./pages/Home/Container")),
  },
  {
    key: uuid(),
    exact: true,
    path: "/cocktails",
    component: lazy(() => import("./pages/Cocktails/Cocktails")),
  },
  {
    key: uuid(),
    exact: true,
    path: "/contacts",
    component: lazy(() => import("./pages/Contacts/Contacts")),
  },
];

export default routes;
