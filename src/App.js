import { Route, Routes } from 'react-router';
import './App.css';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from './Theme';
import Welcome from './pages/Welcome';
import NotFound from './components/NotFound/NotFound';
import RegisterForm from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import DevComponents from './pages/DevComponents';
import NavigationPage from './pages/NavigationPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoriesItems from './components/Categories/CategoriesItems';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
    const isDarkMode = useSelector((state) => state.pageMode.pageMode);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/signUp" element={<RegisterForm />} />
                <Route path="/signIn" element={<LogInPage />} />
                <Route path="/home" element={<NavigationPage />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route
                        path="/home/categories/"
                        element={<CategoriesPage />}
                    >
                        <Route element={<CategoriesItems />} />
                        <Route
                            path="/home/categories/:id"
                            element={<CategoriesItems />}
                        />
                        <Route
                            path="/home/categories/:id/:link"
                            element={<DevComponents />}
                        />
                    </Route>
                    <Route path="/home/search" element={<SearchPage />} />
                    <Route path="/home/Dev" element={<DevComponents />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
