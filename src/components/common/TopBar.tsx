import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Appbar } from 'react-native-paper';

interface TopBarProps {
    title: string;
    onActionOnePress?: () => void;
    onActionTwoPress?: () => void;
}

export default function TopBar({ title, onActionOnePress, onActionTwoPress }: TopBarProps) {
    const navigation = useNavigation();

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content title={title} />
            <Appbar.Action icon="sort" onPress={onActionOnePress} />
            <Appbar.Action icon="animation-outline" onPress={onActionTwoPress} />
        </Appbar.Header>
    );
}
