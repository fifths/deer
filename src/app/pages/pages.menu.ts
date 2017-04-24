export const MENU = [
    {
        path: 'pages',
        children: [
            {
                path: 'dashboard',
                data: {
                    menu: {
                        title: 'dashboard',
                        icon: 'icon-android-home',
                    }
                }
            },
            {
                path: 'editors',
                data: {
                    menu: {
                        title: 'editors',
                        icon: 'icon-edit',
                    }
                },
                children: [
                    {
                        path: 'ckeditor',
                        data: {
                            menu: {
                                title: 'ckeditor',
                            }
                        }
                    }
                ]
            }
        ]
    }
];
