package com.practise.demo;

import org.springframework.stereotype.Component;

@Component("ABC")
public class internetconnection {

	private String ipAddres;
	private int speed;
	
	public String getIpAddres() {
		return ipAddres;
	}
	public void setIpAddres(String ipAddres) {
		this.ipAddres = ipAddres;
	}
	public int getSpeed() {
		return speed;
	}
	public void setSpeed(int speed) {
		this.speed = speed;
	}
	public void switchOn()
	{
		
		System.out.println("Cnnecting to modem");
	}
	
}
