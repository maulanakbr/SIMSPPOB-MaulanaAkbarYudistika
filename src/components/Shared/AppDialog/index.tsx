import React from 'react';
import {View} from 'react-native';

import {Dialog, Portal, Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {AppButton} from '@/components/UI';
import theme from '@/theme';

import style from './style';
import AppHeadline from '../AppHeadline';
import AppLogo from '../AppLogo';

type SharedAppDialogProps = {
  dialogActivity?: 'Top Up' | 'Transaction';
  dialogMode?: 'confirm' | 'success' | 'failed';
  dialogTitle: [string, string];
  dialogEvent?: 'confirm' | 'success';
  dialogVisibility: {
    status: boolean;
    callback: () => void;
  };
  loading: boolean;
  onPress: () => void;
};

export default function AppDialog({
  dialogActivity = 'Top Up',
  dialogMode = 'confirm',
  dialogTitle,
  dialogEvent,
  dialogVisibility,
  loading,
  onPress,
}: SharedAppDialogProps) {
  const {colors} = useTheme<typeof theme>();

  return (
    <React.Fragment>
      <Portal>
        <Dialog visible={dialogVisibility.status} style={style.dialog}>
          {/* Dialog content */}
          <Dialog.Content style={[style.dialogContent]}>
            {dialogMode === 'confirm' ? (
              <AppLogo variant="Logo Only" />
            ) : dialogMode === 'success' ? (
              <View style={style.dialogSuccessIcon}>
                <Icon name="check" size={40} color={colors.textSecondary} />
              </View>
            ) : (
              <View style={[style.dialogSuccessIcon, {backgroundColor: colors.iconBgDanger}]}>
                <Icon name="x" size={40} color={colors.textSecondary} />
              </View>
            )}
            <AppHeadline
              variant="dialog"
              textInput={dialogTitle}
              dialogEvents={dialogEvent}
              style={[{gap: 8}]}
            />
            {dialogMode === 'success' || dialogMode === 'failed' ? (
              <Text variant="bodyLarge" style={{textAlign: 'center'}}>
                {dialogMode === 'success' ? 'berhasil' : 'gagal'}
              </Text>
            ) : null}
          </Dialog.Content>

          {/* Dialog Actions */}
          <Dialog.Actions style={[style.dialogActions]}>
            {dialogMode === 'confirm' ? (
              <React.Fragment>
                <AppButton
                  mode="text"
                  title={
                    dialogActivity === 'Top Up' ? 'Ya, lanjutkan Top Up' : 'Ya, lanjutkan bayar'
                  }
                  labelStyle={{color: colors.primary, fontSize: 18}}
                  onPress={onPress}
                  loading={loading}
                />
                <AppButton
                  mode="text"
                  title="Batalkan"
                  labelStyle={{color: colors.textTertiary, fontSize: 18}}
                  onPress={dialogVisibility.callback}
                />
              </React.Fragment>
            ) : (
              <AppButton
                mode="text"
                title="Kembali ke Beranda"
                labelStyle={{color: colors.primary, fontSize: 18, fontWeight: '800'}}
                onPress={dialogVisibility.callback}
              />
            )}
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </React.Fragment>
  );
}
