import * as React from 'react';
import { Appbar } from 'react-native-paper';

interface TopBarProps {
    title: string;
}

export default function TopBar({ title }: TopBarProps) {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => { }} />
            <Appbar.Content title={title} />
            <Appbar.Action icon="sort-variant" onPress={() => { }} />
            <Appbar.Action icon="animation-outline" onPress={() => { }} />
        </Appbar.Header>
    );
}
