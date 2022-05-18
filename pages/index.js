import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
    );
}

export default function HomePage() {
    const [username, setUsername] = useState("")
    const route = useRouter()

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundImage: 'url(https://cdn.universoracionalista.org/wp-content/uploads/2020/06/gargantua-scaled.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            route.push("/chat")
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                        autocomplete="off"
                    >
                        <Title tag="h2">Welcome back!</Title>
                        <Text variant="body3" styleSheet={{
                            marginBottom: '32px',
                            marginTop: '8px',
                            fontSize: '15px',
                            color: appConfig.theme.colors.neutrals[300],
                            fontFamily: "sans-serif"
                        }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                            value={username}
                            placeholder="Github username"
                        />
                        <Button
                            type='submit'
                            label='Enter'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        {username.length > 2 ? (
                            <>
                                <a target="_blank" href={`https://github.com/${username}`}>
                                    <Image
                                        styleSheet={{
                                            borderRadius: '50%',
                                            border: '3px solid',
                                            borderColor: appConfig.theme.colors.primary[400],
                                            marginBottom: '16px',
                                        }}
                                        src={`https://github.com/${username}.png`}
                                    />
                                </a>
                                <Text
                                    variant="body4"
                                    styleSheet={{
                                        color: appConfig.theme.colors.neutrals[200],
                                        backgroundColor: appConfig.theme.colors.neutrals[900],
                                        padding: '3px 10px',
                                        borderRadius: '1000px',
                                        fontFamily: 'sans-serif'
                                    }}
                                >
                                    {username}
                                </Text>
                            </>
                        ) : null}
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}

// // estilizar
// refatorar
// mostrar mais dados com a api do github