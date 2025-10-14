import * as React from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  TVTextScrollView,
  View,
 } from 'react-native';
import { StyleProp, ViewStyle } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const scale = screenHeight / 1080;

type ItemProps = {
  msg?: string;
  style?: StyleProp<ViewStyle>;
};


const Item: React.FC<ItemProps> = React.memo(({ msg = "Default Message", style }) => {
  return (
    <View style={[styles.item, style]}>
      <Text style={styles.itemText}>{msg}</Text>
    </View>
  );
});

const ITEMS = [...Array(12)].map(
  (
    _,
    i,
  ) => `Item ${i}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.`,
);

const ITEMCOMPONENTS = ITEMS.map((m, i) => (
  <Item key={i} msg={m} />
));

const BigTextBlock: React.FC = () => {

  const [verticalScrollerFocused, setVerticalScrollerFocused] = React.useState(false);

  return (
    <View style={styles.container}>
      <TVTextScrollView
        scrollDuration={0.2}
        pageSize={200}
        snapToStart={true}
        snapToEnd={true}
        onFocus={() => setVerticalScrollerFocused(true)}
        onBlur={() => setVerticalScrollerFocused(false)}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        style={
          verticalScrollerFocused
            ? styles.bigScrollViewFocused
            : styles.bigScrollView
        }
      >
        <Text style={{ fontSize: 30 }}>{ITEMS.join('\n\n')}</Text>
      </TVTextScrollView>
    </View>
  );
};

export default function ScrollViewScreen() {
  return (
    <>
      <BigTextBlock />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 10 * scale,
  },
  scrollView: {
    backgroundColor: '#eeeeee',
    height: 300 * scale,
  },
  bigScrollView: {
    margin: 10 * scale,
    backgroundColor: 'white',
    height: 600 * scale,
  },
  bigScrollViewFocused: {
    backgroundColor: 'white',
    height: 600 * scale,
    width: '70%',
  },
  horizontalScrollView: {
    height: 106 * scale,
    width: '70%',
  },
  text: {
    fontSize: 16 * scale,
    fontWeight: 'bold',
    margin: 6,
  },
  rowLabel: {
    margin: 6 * scale,
    padding: 6 * scale,
    alignItems: 'center',
  },
  button: {
    margin: 6 * scale,
    padding: 6 * scale,
    alignItems: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 3 * scale,
  },
  buttonSelected: {
    margin: 6 * scale,
    padding: 6 * scale,
    alignItems: 'center',
    backgroundColor: '#ccccff',
    borderRadius: 4 * scale,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    margin: 6 * scale,
    padding: 6 * scale,
    backgroundColor: '#cccccc',
    borderRadius: 4 * scale,
    width: 300 * scale,
  },
  itemText: {
    fontSize: 30 * scale,
  },
});
