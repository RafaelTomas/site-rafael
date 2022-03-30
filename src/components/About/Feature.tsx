import React, { FunctionComponent } from 'react';
import { Stack, Flex, Text } from '@chakra-ui/react';
import { FeatureProps } from './types';

const Feature: FunctionComponent<FeatureProps> = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default Feature;