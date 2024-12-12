## Використані найкращі практики
### 1. **Компонентна архітектура (Component Architecture)**
- Додаток розділений на  компоненти, кожен з яких виконує одну конкретну задачу. Це спрощує читання коду та полегшує його обслуговування.

### 2. **Управління станом через Context API (State Management -  Context API)**
- Context API використовується для централізованого управління станом, що виключає необхідність передавати дані через кілька рівнів компонентів.

### 3. **Ізольована стилізація (Isolated Styling)**
- Використання CSS Modules забезпечує ізольоване оформлення компонентів, запобігаючи конфліктам стилів між ними.

### 4. **Перевірка типів пропсів і значення за замовчуванням (Prop Type Checking and Default Values)**
- Застосування PropTypes для перевірки типів пропсів підвищує надійність коду. Значення за замовчуванням гарантують, що компоненти працюють коректно навіть без переданих пропсів.

### 5. **Кастомні хуки (Custom Hooks)**
- Кастомні хуки використовуються для спрощення та повторного використання логіки, пов’язаної із споживанням контексту.

### 6. **Принцип єдиної відповідальності (Single Responsibility Principle)**
- Кожен компонент і файл відповідає за виконання однієї задачі, що полегшує тестування і розширення функціональності.