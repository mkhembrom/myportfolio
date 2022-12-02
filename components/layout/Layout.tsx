import { Header } from "../Header";
import { PageIndicator } from "../PageIndicator";

export const Layout = ({children}: any) => {
    return (
        <div className='relative'>
        <Header />
        <PageIndicator />
        <div>
            {children}
        </div>
        </div>
    );
}