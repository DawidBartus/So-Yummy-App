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
import HomePage from './pages/HomePage';
import firstApiFetch from './Services/ApiFetch';
import StartPage from './components/StartPage/StartPage';
import Categories from './pages/Categories';
import CategoriesItems from './components/Categories/CategoriesItems';

const startFetch = await firstApiFetch();

function App() {
    const isDarkMode = useSelector((state) => state.pageMode.pageMode);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/signUp" element={<RegisterForm />} />
                <Route path="/signIn" element={<LogInPage />} />
                <Route path="/home" element={<HomePage />}>
                    <Route
                        path="/home"
                        element={<StartPage recipes={startFetch} />}
                    />
                    <Route path="/home/categories/" element={<Categories />}>
                        <Route element={<CategoriesItems />} />
                        <Route
                            path="/home/categories/:id"
                            element={<CategoriesItems />}
                        />
                    </Route>
                    <Route path="/home/Dev" element={<DevComponents />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
