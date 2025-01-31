# Nevis Wealth challenge — a solution by Adam Arutyunov

https://github.com/user-attachments/assets/392ad6f4-6f84-4fe3-8740-5f2fffd3d26f

## Setup

```bash
npm install
```

### Server

Start for development:

```bash
npm run server
```

### Client

Start for development:

```bash
npm run client
```

### Tests

Run frontend UI tests:

```bash
npm run test
```

# Features

## Separated UI and business logic

The solution provides abstract `NestedTable`, `NestedTableRow` and `StackedBarGraph` components which accept any data in the specifed format, so they can be reused in other parts of the product. However, `DashboardTable` and `DashboardGraph` components provide concrete solution of presenting company's statistics fetched from the backend.

## Responsiveness

The screen works correctly on screens of any size:

<img width="1552" alt="Screenshot 2025-01-31 at 17 13 15" src="https://github.com/user-attachments/assets/12ca5848-789f-437f-804d-c26d61ee2005" />

<img width="1114" alt="Screenshot 2025-01-31 at 17 14 47" src="https://github.com/user-attachments/assets/729a3c60-351c-4622-9258-1a71aef7783f" />

<img width="852" alt="Screenshot 2025-01-31 at 17 14 52" src="https://github.com/user-attachments/assets/60379f23-494e-4cff-a870-762b21ff556e" />

<img width="612" alt="Screenshot 2025-01-31 at 17 14 56" src="https://github.com/user-attachments/assets/500a7be6-bf87-436d-b73b-76006b33e3bd" />

## Loading and error handling

https://github.com/user-attachments/assets/af1d8a12-495a-484a-8191-96af3089dc50

<img width="1552" alt="Screenshot 2025-01-31 at 17 37 22" src="https://github.com/user-attachments/assets/38f28d9a-2390-4d6a-b02e-eeade846dc22" />
