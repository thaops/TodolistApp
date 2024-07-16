import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContainerComponen from '../components/ContainerComponen'
import { globalStyles } from '../styles/globalStyles'
import RowComponent from '../components/RowComponen'
import SectionComponent from '../components/SectionComponent'
import TextComponent from '../components/TextComponent'
import { fontFamilys } from '../constants/fontFamily'
import TitleComponent from '../components/TitleComponent'
import CardComponent from '../components/CardComponent'
import { colors } from '../constants/colors'
import { Element4, Notification, SearchNormal } from 'iconsax-react-native'
import TagComponents from '../components/TagComponents'
import SpaceComponent from '../components/SpaceComponent'
import CicularComponent from '../components/CicularComponent'
import EditComponent from '../components/EditComponent'
import AvataGroup from '../components/AvataGroup'
import ProgressBarComponent from '../components/ProgressBarComponent'

const HomeScreen = () => {
  return (
    <ContainerComponen>
      <SectionComponent>
        <RowComponent justify='space-between'>
          <Element4 size={24} color={colors.decs} />
          <Notification size={24} color={colors.decs} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text='hi Json !' />
        <TitleComponent text='Be Productive Today' />
      </SectionComponent>
      <SectionComponent>
        <RowComponent styles={[globalStyles.inbutSection]} justify='space-between'>
          <TextComponent text="seach" />
          <SearchNormal size="32" color={colors.decs} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent bgColor={colors.gray}>
          <RowComponent >
            <View style={{ flex: 1 }}>
              <TextComponent text='Tack Progess' font={fontFamilys.bold} />
              <TextComponent text='30/40 Tack done' />
              <SpaceComponent height={12} />
              <RowComponent justify='flex-start'>
                <TagComponents text='Macth 2' />
              </RowComponent>
            </View>
            <View>
              <CicularComponent value={60} />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <SectionComponent>
          <RowComponent styles={{ alignItems: 'flex-start' }}>
            <View style={{ flex: 1 }}>
              <CardComponent bgColor={colors.violet}>
                <RowComponent justify='flex-start'>
                  <EditComponent />
                </RowComponent>
                <SpaceComponent height={12} />
                <TextComponent text='UX DESIGN' font={fontFamilys.bold} size={18} />
                <SpaceComponent height={12} />
                <TextComponent text='Tacks management app mobile' size={14} />
                <View style={{ marginVertical: 24 }}>
                  <AvataGroup />
                  <SpaceComponent height={16} />
                  <SectionComponent>
                    <ProgressBarComponent percent='80%' />
                  </SectionComponent>
                </View>
                <TextComponent text='Tacks management app mobile' size={14} />
              </CardComponent>
            </View>
            <SpaceComponent width={16} />
            <View style={{ flex: 1 }}>
              <CardComponent bgColor={colors.blurBlue}>
                <RowComponent justify='flex-start'>
                  <EditComponent />
                </RowComponent>
                <SpaceComponent height={12} />
                <TextComponent text='API PAYMEN' font={fontFamilys.bold} size={18} />
                <AvataGroup />
                <SpaceComponent height={12} />
                <SectionComponent>
                  <ProgressBarComponent percent='80%' />
                </SectionComponent>
              </CardComponent>
              <SpaceComponent height={16} />
              <CardComponent bgColor={colors.green}>
                <RowComponent justify='flex-start'>
                  <EditComponent />
                </RowComponent>
                <SpaceComponent height={12} />
                <TextComponent text='UPDATE WORK' font={fontFamilys.bold} size={18} />
                <TextComponent text='Tacks management app mobile' size={14} />
              </CardComponent>
            </View>
          </RowComponent>
        </SectionComponent>
      </SectionComponent>
    </ContainerComponen>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})