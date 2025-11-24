# React Pro Final Project Base

## Задание 1 Архитектура:

### Что сделано:

- создан компонент кнопки в shared и переиспользован;
- создан компонент инпута в shared и переиспользован;
- выделена фича корзины;
- выделена фича авторизации;
- выделена фича отзывов;
- выделена фича продукта;
- убраны лишние проп-пробросы;
- проверена папка shared: вынесена папка providers из shared в app, вынесен компонент Card в entities;
- store вынесен в папку app;

## Задание 2 ОПТИМИЗАЦИЯ:

### Что сделано:

- найдены и убраны дубли ререндеров при добавлении в корзину в списке товаров;
- найдены и убраны дубли ререндеров при добавлении в избранное в списке товаров;
- использован useMemo для сложных вычислений (CartAmount и др);

Добавление в корзину до оптимизации:
![Add to Cart Before](src/shared/assets/gif/ререндер%20при%20клике%20на%20кнопку%20добавления%20до.gif)

Добавление в корзину после оптимизации:
![Add to Cart After](src/shared/assets/gif/ререндер%20при%20клике%20на%20кнопку%20добавления%20после.gif)

Добавление в избранное до оптимизации:
![List Rerender Before Like](src/shared/assets/gif/ререндер%20списка%20по%20лайку%20до.gif)

Добавление в избранное после оптимизации:
![List Rerender After Like](src/shared/assets/gif/ререндер%20списка%20по%20лайку%20после.gif)

## Задание 3 REACT PORTAL:

### Что сделано:

- добавлено модальное окно подтверждения заказа в корзине;

![Modal Window](src/shared/assets/gif/Модальное%20окно.gif)

## Задание 4 USEREF:

### Что сделано:

- автофокус на крестик в модалке и на предыдущий элемент на странице при закрытии модалки;
- автофокус на поле email на странице авторизации;

## Задание 5 Сборка:

### Что сделано:

- Сборка vite с SWC;

Сборка vite:
![Vite Build](src/shared/assets/images/сборка%20vite.png)

Сборка webpack:
![Webpack Build](src/shared/assets/images/сборка%20webpack.png)

## Задание 6 React 19 Hooks:

### Что сделано:

- Реализовано оптимистичное добавление товара в избранное и откат в случае ошибки (система дополнительно информируется пользователя об ошибке появлением тостера);

![Optimistic Like Update](src/shared/assets/gif/Оптимистичное%20обновление%20лайка.gif)

## Структура проекта

```
react_pro_final_project_base/
├── .env
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── .stylelintignore
├── .stylelintrc.json
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tsconfig.json
├── vite.config.js
├── .husky/
├── src/
│   ├── custom.d.ts
│   ├── index.tsx
│   ├── vite-env.d.ts
│   ├── app/
│   │   ├── app.module.css
│   │   ├── App.tsx
│   │   ├── index.ts
│   │   ├── providers/
│   │   │   └── router/
│   │   │       ├── index.ts
│   │   │       └── config/
│   │   │           └── router.tsx
│   │   ├── store/
│   │   │   ├── store.ts
│   │   │   ├── types.ts
│   │   │   ├── utils.ts
│   │   │   ├── api/
│   │   │   │   ├── authApi.ts
│   │   │   │   ├── config.ts
│   │   │   │   └── productsApi.ts
│   │   │   ├── HOCs/
│   │   │   │   ├── WithProtection.tsx
│   │   │   │   └── WithQuery.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useProducts.ts
│   │   │   ├── reducers/
│   │   │   │   └── rootReducer.ts
│   │   └── slices/
│   │   │       ├── cart.ts
│   │       ├── products.ts
│   │   │       └── user.ts
│   │   └── styles/
│   │       ├── normalize.css
│   │       └── styles.css
│   ├── entities/
│   │   └── Product/
│   │       └── ui/
│   │           ├── Card/
│   │           │   ├── index.ts
│   │           │   └── ui/
│   │           │       ├── Card.module.css
│   │           │       ├── Card.tsx
│   │           │       └── Price/
│   │           │           └── ui/
│   │           │               ├── Price.module.css
│   │           │               └── Price.tsx
│   │           └── Detail/
│   │               └── ui/
│   │                   ├── Detail.module.css
│   │                   └── Detail.tsx
│   ├── features/
│   │   ├── CartAmount/
│   │   │   ├── index.ts
│   │   │   └── ui/
│   │   │       ├── CartAmount.module.css
│   │   │       └── CartAmount.tsx
│   │   ├── CartItem/
│   │   │   ├── index.ts
│   │   │   └── ui/
│   │   │       ├── CartItem.module.css
│   │   │       └── CartItem.tsx
│   │   ├── CartList/
│   │   │   ├── index.ts
│   │   │   └── ui/
│   │   │       ├── CartList.module.css
│   │   │       └── CartList.tsx
│   │   ├── ReviewForm/
│   │   │   ├── ReviewForm.module.css
│   │   │   └── ReviewForm.tsx
│   │   ├── SignIn/
│   │   ├── model/
│   │   │   │   ├── types.ts
│   │   │   │   └── validator.ts
│   │   │   └── ui/
│   │   │       └── SignIn.tsx
│   │   ├── SignUp/
│   │   │   ├── model/
│   │   │   ├── types.ts
│   │   │   │   └── validator.ts
│   │   │   └── ui/
│   │   │       └── SignUp.tsx
│   ├── pages/
│   │   ├── CartPage/
│   │   │   ├── index.ts
│   │   │   └── ui/
│   │       └── CartPage.tsx
│   │   ├── FavoritesPage/
│   │   │   ├── index.ts
│   │   │   └── ui/
│   │   │       └── FavoritesPage.tsx
│   │   ├── HomePage/
│   │   │   ├── index.ts
│   │   │   └── ui/
│   │   │       └── HomePage.tsx
│   │   ├── NotFoundPage/
│   │   │   ├── index.ts
│   │   │   └── ui/
│   │   │       ├── NotFoudPage.module.css
│   │   │       └── NotFoundPage.tsx
│   │   ├── ProductPage/
│   │   │   ├── index.ts
│   │   │   └── ui/
│   │   │       └── ProductPage.tsx
│   │   ├── ProfilePage/
│   │   │   ├── index.ts
│   │   │   └── ui/
│   │   │       ├── ProfilePage.module.css
│   │   │       └── ProfilePage.tsx
│   │   ├── SignInPage/
│   │   │   ├── index.ts
│   │   │   └── ui/
│   │   │       └── SignInPage.tsx
│   │   └── SignUpPage/
│   │       ├── index.ts
│   │       └── ui/
│   │           └── SignUpPage.tsx
│   ├── shared/
│   │   ├── api/
│   │   │   ├── ApiServise.ts
│   │   │   └── hooks/
│   │   │       └── useActionCreated.ts
│   │   ├── assets/
│   │   │   ├── gif/
│   │   │   │   ├── Модальное окно.gif
│   │   │   │   ├── Оптимистичное обновление лайка.gif
│   │   │   │   ├── ререндер при клике на кнопку добавления до.gif
│   │   │   │   ├── ререндер при клике на кнопку добавления после.gif
│   │   │   │   ├── ререндер списка по лайку до.gif
│   │   │   │   └── ререндер списка по лайку после.gif
│   │   │   ├── icons/
│   │   │   ├── back.svg
│   │   │   │   ├── like.svg
│   │   │   │   ├── quality.svg
│   │   │   │   ├── star.svg
│   │   │   │   ├── trash.svg
│   │   │   │   └── truck.svg
│   │   │   └── images/
│   │   │       ├── instagram.svg
│   │   │       ├── telegram.svg
│   │   │       ├── viber.svg
│   │   │       ├── vk.svg
│   │   │       ├── whatsapp.svg
│   │   │       ├── сборка vite.png
│   │   │       └── сборка webpack.png
│   │   ├── hooks/
│   │   │   ├── useAddToCart.ts
│   │   │   ├── useDebounce.ts
│   │   │   └── usePagination.ts
│   │   ├── types/
│   │   │   └── global.d.ts
│   │   ├── ui/
│   │   ├── Button/
│   │   │   │   ├── index.ts
│   │   │   │   └── ui/
│   │   │   │       ├── Button.module.css
│   │   │   │       └── Button.tsx
│   │   │   ├── ButtonBack/
│   │   │   │   ├── index.ts
│   │   │   │   └── ui/
│   │   │   │       └── ButtonBack.tsx
│   │   │   ├── CartCounter/
│   │   │   │   ├── index.ts
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useCount.ts
│   │   │   │   └── ui/
│   │   │   │       ├── CartCounter.module.css
│   │   │   │       └── CartCounter.tsx
│   │   │   ├── icons/
│   │   │   ├── Back/
│   │   │   │   │   └── ui/
│   │   │   │   │       └── BackIcon.tsx
│   │   │   │   ├── Like/
│   │   │   │   │   └── ui/
│   │   │   │   │       └── LikeIcon.tsx
│   │   │   │   ├── Star/
│   │   │   │   └── ui/
│   │   │   │   │       └── StarIcon.tsx
│   │   │   │   └── Trash/
│   │   │   │       └── ui/
│   │   │       └── TrashIcon.tsx
│   │   │   ├── Input/
│   │   │   │   ├── index.ts
│   │   │   │   └── ui/
│   │   │   │       ├── Input.module.css
│   │   │   │       └── Input.tsx
│   │   │   ├── LikeButton/
│   │   │   │   ├── index.ts
│   │   │   │   └── ui/
│   │   │   │       ├── LikeButton.module.css
│   │   │   │       └── LikeButton.tsx
│   │   │   ├── LoadMore/
│   │   │   │   ├── index.ts
│   │   │   │   ├── hooks/
│   │   │   └── useLoadMore.ts
│   │   │   │   └── ui/
│   │   │   │       └── LoadMore.tsx
│   │   │   ├── Logo/
│   │   │   │   ├── index.ts
│   │   │   │   ├── assets/
│   │   │   │   │   └── logo.svg
│   │   │   │   └── ui/
│   │   │   │       ├── Logo.module.css
│   │   │   │       └── Logo.tsx
│   │   │   ├── Modal/
│   │   │   │   ├── index.ts
│   │   │   │   └── ui/
│   │   │   │       ├── Modal.module.css
│   │   │   │       └── Modal.tsx
│   │   │   ├── ProductCartCounter/
│   │   │   │   ├── index.ts
│   │   │   │   ├── hooks/
│   │   │   └── useCount.ts
│   │   │   │   └── ui/
│   │   │   │       ├── ProductCartCounter.module.css
│   │   │   │       └── ProductCartCounter.tsx
│   │   │   ├── Rating/
│   │   │   ├── index.ts
│   │   │   │   └── ui/
│   │   │       └── Rating.tsx
│   │   │   ├── Search/
│   │   │   │   ├── hooks/
│   │   │   │   │   └── usePostsSearchForm.ts
│   │   │   │   └── ui/
│   │   │   │       ├── Search.module.css
│   │   │   │       └── Search.tsx
│   │   │   ├── Sort/
│   │   │   ├── index.ts
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useSort.ts
│   │   │   │   └── ui/
│   │   │   │       └── Sort.tsx
│   │   │   └── Spinner/
│   │   │       ├── index.ts
│   │   │       └── ui/
│   │   │           ├── Spinner.module.css
│   │   │           └── Spinner.tsx
│   │   ├── utils/
│   │   │   ├── common.ts
│   │   │   ├── getMessageFromError.ts
│   │   │   ├── index.ts
│   │   │   └── isLiked.ts
│   └── widgets/
│       ├── CardList/
│       │   ├── index.ts
│       │   └── ui/
│       │       ├── CardList.module.css
│       │       └── CardList.tsx
│       ├── Cart/
│       │   ├── index.ts
│       │   └── ui/
│       │       ├── Cart.module.css
│       │       └── Cart.tsx
│       ├── Footer/
│       │   ├── index.ts
│       │   └── ui/
│       │       ├── Footer.module.css
│       │       └── Footer.tsx
│       ├── Header/
│       │   ├── index.ts
│       │   └── ui/
│       │       ├── Header.module.css
│       │       └── Header.tsx
│       ├── Product/
│       │   └── ui/
│       │       └── Product.tsx
│       ├── ReviewList/
│       │   ├── index.ts
│       │   └── ui/
│       │       ├── ReviewList.module.css
│       │       └── ReviewList.tsx
│       ├── SignInForm/
│       │   ├── index.ts
│       │   └── ui/
│       │       └── SignInForm.tsx
│       └── SignUpForm/
│           ├── index.ts
│           └── ui/
│               └── SignUpForm.tsx
```
