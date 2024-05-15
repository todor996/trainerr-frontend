import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { LegacyRef, ReactNode, forwardRef, useMemo, useState } from 'react';
import type { SelectProps, TamaguiElement } from 'tamagui';
import { Adapt, Label, Select, Sheet, SizableText, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

interface TrrSelectProps extends SelectProps {
  label?: string;
  placeholder?: string;
  error?: string;
  items: { value: string; content: ReactNode }[];
  width?: string;

  onChange: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
  onActiveChange?: (value: string, index: number) => void;
}
// const TrrSelectUnstyled = forwardRef(
export const TrrSelect = forwardRef(
  (props: TrrSelectProps, ref: LegacyRef<TamaguiElement>): JSX.Element => {
    const { error, label, placeholder, items } = props;

    const [val, setVal] = useState('apple');

    function handleOnValueChange(value: string) {
      setVal(value);
      return props.onChange(value);
    }

    return (
      <YStack flex={1} width="100%">
        {label && (
          <Label htmlFor={props.id}>
            <SizableText marginBottom="$1.5" size="$4">
              {label}
            </SizableText>
          </Label>
        )}

        <Select
          id={props.id}
          value={val}
          onValueChange={handleOnValueChange}
          disablePreventBodyScroll
          {...props}
        >
          <Select.Trigger ref={ref} flex={1} maxHeight="42px" iconAfter={ChevronDown}>
            <Select.Value placeholder={placeholder} />
          </Select.Trigger>

          <Adapt when="sm" platform="touch">
            <Sheet
              modal
              dismissOnSnapToBottom
              animationConfig={{
                type: 'spring',
                damping: 20,
                mass: 1.2,
                stiffness: 250,
              }}
            >
              <Sheet.Frame>
                <Sheet.ScrollView>
                  <Adapt.Contents />
                </Sheet.ScrollView>
              </Sheet.Frame>

              <Sheet.Overlay
                animation="lazy"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
                backgroundColor="white"
              />
            </Sheet>
          </Adapt>

          <Select.Content zIndex={200000}>
            {/* TODO: Think about removing this, since it is a nice feature, maybe it is overkill right now */}

            <Select.ScrollUpButton
              alignItems="center"
              justifyContent="center"
              position="relative"
              width="100%"
              height="$3"
            >
              <YStack zIndex={10}>
                <ChevronUp size={20} />
              </YStack>

              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen
                colors={['$background', 'transparent']}
                borderRadius="$4"
              />
            </Select.ScrollUpButton>

            <Select.Viewport
              // to do animations:
              animation="quick"
              animateOnly={['transform', 'opacity']}
              enterStyle={{ o: 0, y: -10 }}
              exitStyle={{ o: 0, y: 10 }}
              minWidth={200}
              backgroundColor="white"
            >
              <Select.Group>
                {useMemo(
                  () =>
                    items.map((item, i) => {
                      return (
                        <Select.Item
                          index={i}
                          key={item.value + i}
                          value={item.value.toLowerCase()}
                        >
                          <Select.ItemText>{item.content}</Select.ItemText>

                          <Select.ItemIndicator marginLeft="auto">
                            <Check size={16} />
                          </Select.ItemIndicator>
                        </Select.Item>
                      );
                    }),

                  [items],
                )}
              </Select.Group>
            </Select.Viewport>

            {/* TODO: Think about removing this, since it is a nice feature, maybe it is overkill right now */}
            <Select.ScrollDownButton
              alignItems="center"
              justifyContent="center"
              position="relative"
              width="100%"
              height="$3"
            >
              <YStack zIndex={10}>
                <ChevronDown size={20} />
              </YStack>

              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen
                colors={['transparent', '$background']}
                borderRadius="$4"
              />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select>

        <>
          {error && (
            // TODO@theme: Use error when theme is ready
            <SizableText color="red" size="$2" marginTop="$1.5">
              {error}
            </SizableText>
          )}
        </>
      </YStack>
    );
  },
);

// export const TrrSelect = styled(TrrSelectUnstyled, {});
