package com.isis.adventureISIServe.demo;


import generated.World;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author mgreffet
 */
public class Services {
public World readWorldFromXml(){
        JAXBContext jc;
        World world = new World();
        InputStream input = getClass().getClassLoader().getResourceAsStream("XMLSushi.xml");
         try {
            jc = JAXBContext.newInstance(World.class);
            Unmarshaller jaxbUnmarshaller = jc.createUnmarshaller();
            world = (World) jaxbUnmarshaller.unmarshal(input);
        } catch (Exception e) {
            System.out.println("Erreur lecture du fichier:"+e.getMessage());
            e.printStackTrace();
             
        }
          return world;
    }
    
    public void saveWordlToXml(World world){
        JAXBContext jc;
        try {
            OutputStream output = new FileOutputStream("XMLSushi.xml");
            jc = JAXBContext.newInstance(World.class);
            Marshaller march = jc.createMarshaller();
            march.marshal(world, output);
        } catch (Exception e) {
            System.out.println("Erreur écriture du fichier:"+e.getMessage());
            e.printStackTrace();
        }
    }

    World getWorld() {
        return readWorldFromXml();
    }
}
    