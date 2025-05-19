# Project Title (Exercise)

This is an exercise project.

## Prerequisites

Ensure you have the following installed:
*   PHP (version as per `composer.json`, typically 8.0+)
*   Composer
*   Docker and Docker Compose (Optional, if you prefer to run via Docker)
*   Node.js and npm/yarn (For frontend assets, if applicable)

## Getting Started

### Option 1: Running with Artisan (PHP/Composer)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mUcHG0Di/oce-exercise.git
    cd code-interview
    ```

2.  **Install PHP dependencies:**
    ```bash
    composer install
    ```

3.  **Copy environment file:**
    ```bash
    cp .env.example .env
    ```
    *Note: You might need to create the `.env.example` if it doesn't exist or update `.env` with your specific configurations (database, AWS Cognito keys, etc.).*

4.  **Generate application key:**
    ```bash
    php artisan key:generate
    ```

5.  **Run database migrations (if applicable):**
    ```bash
    php artisan migrate
    ```

6.  **Install frontend dependencies (if applicable):**
    ```bash
    npm install
    # or
    yarn install
    ```

7.  **Build frontend assets (if applicable):**
    ```bash
    npm run dev
    # or
    yarn dev
    # or for production
    # npm run build
    # yarn build
    ```

8.  **Start the development server:**
    ```bash
    php artisan serve
    ```
    The application will usually be available at `http://localhost:8000`.

### Option 2: Running with Laravel Sail

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mUcHG0Di/oce-exercise.git
    cd code-interview
    ```

2.  **Install PHP dependencies (if not already done, Sail needs the vendor directory):**
    If you haven't run `composer install` locally yet, you might need to do so for Sail to be available, or use a temporary PHP container to run it.
    ```bash
    composer install 
    ```

3.  **Copy environment file:**
    Create a `.env` file from `.env.example` if it doesn't exist and configure it. Sail relies on this for service configurations.
    ```bash
    cp .env.example .env
    ```
    *Ensure your `.env` file has `DB_HOST=mysql` (or `pgsql` etc., depending on your Sail setup) if you're using the default Sail database service. Also, set `FORWARD_DB_PORT`, `FORWARD_MAILHOG_PORT`, etc., if you want to access these services directly on localhost.*

4.  **Start the Sail containers:**
    ```bash
    ./vendor/bin/sail up -d
    ```
    *If this is the first time, Sail will build the necessary Docker images.* 

5.  **Generate application key:**
    ```bash
    ./vendor/bin/sail artisan key:generate
    ```

6.  **Run database migrations:**
    ```bash
    ./vendor/bin/sail artisan migrate
    ```

7.  **Install and build frontend assets (if applicable):**
    ```bash
    ./vendor/bin/sail npm install
    ./vendor/bin/sail npm run dev # or build
    ```

    The application will typically be available at `http://localhost` (or the port specified by `APP_PORT` in your `.env` file). Sail handles the port forwarding.
