export interface IUser{
    username: string;
    token: string;
}

export interface IContext extends IUser{
    autenticar: (username: string, password: string) => Promise<void>;
    deslogar: () => void;
}

export interface IProvider{
    children: JSX.Element;
}